from django.shortcuts import render
from .serializers import *
from rest_framework.views import APIView
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
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






    
