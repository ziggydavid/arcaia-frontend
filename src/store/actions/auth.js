import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user
  };
};

export const authFail = (detail) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: detail,
    detail: null,
  };
};

export const authFailS = (sev) => {
  return {
    type: actionTypes.AUTH_FAILS,
    error: sev,
    detail: null,
  };
};


export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("pMonths");
  localStorage.removeItem("pData");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};


export const twoFALogin = (code, token) => {
  return dispatch => {
    
    dispatch(authStart());
    axios.put("/email/verify/", {mfa_code:code},{headers:{
            'Authorization': `Token ${token}`
          }}).then(res => {
            if(res.data.enabled === true){
              axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`
            }
              axios.get('/user-detailx/')
              .then(res => {
                
                const user = {
                  token: token,
                  username: res.data.username,
                  expirationDate: new Date(new Date().getTime() + 3600 * 1000),
                  userId: res.data.id,
                  email: res.data.email,
                  last_login: res.data.last_login,
                  full_name: res.data.full_name,
                  state: res.data.state,
                  phone:res.data.phone,
                  date_joined: res.data.date_joined,
                  profile_pic: res.data.profile_pic,
                  signature: res.data.signature,
                  address: res.data.address,
                  account_name: res.data.account_name,
                  account_no: res.data.account_no,
                  bank_name: res.data.bank_name,
                  city: res.data.city,
                }
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(checkAuthTimeout(3600))
               dispatch(authSuccess(user))
              }
              ).catch(er => console.log(er.response))
            }
          }).catch(error => {
            dispatch(authFail(error.response.data.mfa_code[0]))
          })
  }
}

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const userx = {
      username:email, password
    }
    axios.post("/mfa/authtoken/login/", userx)
      .then(res => { 
        
        if(res.data.mfa_required === true){
          const{ token,phone} = res.data
          const user = {
            twoFA: true,
            token: token,
          }
          localStorage.setItem('token', `${token}`);
          dispatch(authSuccess(user))     
        }
        
        else if (res.data.token){
          console.log(res.data)
          const token = res.data.token
          localStorage.setItem('token', `${token}`)
          axios.put("/email/request/", {email:res.data.email,phone_num:res.data.phone},{headers:{
            'Authorization': `Token ${token}`
          }}).then(res => {
            
            if(res.data.enabled === false){
              const user = {
                twoFA: true,
                token: token,
              }
              dispatch(authSuccess(user))     
               }
          }).catch(err => {
            dispatch(authFail())
            console.log(err.response.data)})
          
        }
        else if(res.data.error) {
          const detail = {
            detail: res.data.error
          }
          dispatch(authFail(detail));
        }

      }).catch(error => {
        
        if(error.response.data.detail){
          dispatch(authFail(error.response.data.detail + "" +" Try again in 5 minutes"))
        }
        else if (error.response.data.non_field_errors){
          
            dispatch(authFail(error.response.data.non_field_errors[0]))
          
          
        }else{
          dispatch(authFail("Unable to log you in at the moment"))
        }

      })
  }

}




export const authSignup = (username, email, password1, password2, full_name, state, city, address,phone,profile_pic,signature,code,bank_name, account_name, account_number) => {
  return dispatch => {
    dispatch(authStart());
    
    
    let form_data = new FormData();
    form_data.append('username',username)
    form_data.append('email',email)
    form_data.append('password', password1)
    form_data.append('password1', password1)
    form_data.append('password2',password2)
    form_data.append('full_name',full_name)
    form_data.append('state', state)
    form_data.append('city', city)
    form_data.append('address',address)
    form_data.append('phone', phone)
    form_data.append('profile_pic',profile_pic,profile_pic.name)
    form_data.append('signature',signature, signature.name)
    form_data.append('code',code)
    form_data.append('bank_name',bank_name)
    form_data.append('account_name',account_name)
    form_data.append('account_number',account_number)


    axios
      .post("/rest-auth/registration/", form_data,{ headers: {
        'content-type': 'multipart/form-data'
      }})
      
      .then(res => {
        if (res.data.detail) {
          const user = {
            sent: res.data.detail,
            username,
            email,
            expirationDate: new Date(new Date().getTime() + 3600 * 1000),

          }
          localStorage.setItem("account", JSON.stringify(user));
          dispatch(authSuccess(user));
          dispatch(checkAuthTimeout(3600));
        }

        if (res.data.error) {
          const sev = {
            detail: res.data.error
          }
          dispatch(authFailS(sev));
          window.scrollTo(0, 0)
        }
      }).catch(fail => {
        if (fail.response.data.non_field_errors){
          
          dispatch(authFailS({detail: fail.response.data.non_field_errors[0]}))
          window.scrollTo(0, 0)
        
      }else if(fail.response.data.password1 ){
        dispatch(authFailS({detail: fail.response.data.password1[0]}))
        window.scrollTo(0, 0)
      }else{
        dispatch(authFailS({ detail: "Unable to proceed further at the moment" }));
        window.scrollTo(0, 0)
      }
     console.log(fail.response)
       /* dispatch(authFailS({ detail: fail.response.data.non_field_errors[0]}));*/
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(user.expirationDate);
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(user));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
