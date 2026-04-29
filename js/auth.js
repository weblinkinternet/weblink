function register(){
  localStorage.setItem(user.value,pass.value);
  alert("OK");
}

function login(){
  if(localStorage.getItem(user.value)===pass.value){
    location="dashboard.html";
  }else alert("Sai");
}
