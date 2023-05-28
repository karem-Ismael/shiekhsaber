export const AUTH_DATA = "AUTH_DATA";
export const RETURNLOGIN = "RETURNLOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP_USER_FAILURE="SIGNUP_USER_FAILURE";
export const Auth_SUCCESS="Auth_SUCCESS"

export function authDataAction(payload) {
  return {
    type: AUTH_DATA,
    payload,
  };
}
export function AuthSuccess(){
  return{
    type: Auth_SUCCESS,

  }
}
export function GoToLogin(status) {
  return {
    type: RETURNLOGIN,
    payload: status,
  };
}
export const  AuthFail =   user=>{
  return{
    type:SIGNUP_USER_FAILURE,
    payload:user
  }
  // dispatch({ type: SIGNUP_USER_FAILURE ,payload:res.data.errors});

}
export function LogOutAction() {
  return {
    type: LOGOUT,
  };
}


