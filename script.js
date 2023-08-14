// added event handler in submit button 
document.getElementById('submit-btn').addEventListener('click',function(){
    // email field
    const usersEmail=document.getElementById('user-email');
  const email=usersEmail.value ;
    // password field 
    const usersPassword=document.getElementById('user-password')
    const password=usersPassword.value;
//   verify email and password 
if (email==="mohosin2126@gmail.com" && password=='secret'){
   window.location.href="http://127.0.0.1:5500/bank-dashboard.html"
}
else{
    alert("invalid user email and password . please enter the right user name and password !!")
}
})