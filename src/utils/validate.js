export const checkFormData =(email , password  )=>{
  const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);
  const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
   
  if(!isEmailValid)return "Email id is not valid";
  if(!isPasswordValid) return "Password is not valid";
  //if(!isNameValid) return "Your name is not correct" ;

  return null;



}