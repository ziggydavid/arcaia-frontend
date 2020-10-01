from django.shortcuts import render
from .serializers import *
from rest_framework.views import APIView
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class Contact(APIView):
    
    def post(self, request, *args, **kwargs):
        serializer_class = Contact(data=request.data)
        if serializer_class.is_valid():
            data = serializer_class.validated_data
            name = data.get('name')
            sender = data.get('email')
            message = data.get('message')
            company = data.get('comapny')
            phone = data.get('phone')
            msg = "{0} with email {1} sent a message. \n\n{3}. \n\n phone: {4} \n\n company: {5}".format(name,sender,message,phone, company)
            send_mail("Enquiry", msg, 'care@deezisoft.com',['care@deezisoft.com'])
            return Response({"success": "Your message has been sent, we will be in touch shortly"})
        return Response({'success': "Failed"}, status=status.HTTP_400_BAD_REQUEST) 


class PostArticle(CreateModelMixin):

    query_set = Post.objects.all()
    def post(self,request, *args, **kwargs):
        serializer_class = PostSerializer
        return self.create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        serializer_class = UpdatePost
        partial = kwargs.pop('partial', False)
        post_id = request.query_params.get('post_id', None)
        instance = self.query_set.filter(id=post_id)
        serializer = serializer_class(instance,data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        if instance:
            serializer = serializer_class(instance,data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        
        return self.partial_update(request, *args, **kwargs)



    
