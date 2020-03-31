const loginButton = document.getElementById('login')
loginButton.addEventListener('click',function(){

   const userForm =  document.forms['userForm']
   const userNameElement = userForm.username
   const userPasswordElement = userForm.password
   const userName = userNameElement.value
   const password = userPasswordElement.value
   console.log('Username is ',userName)
   console.log('Password is ',password)

    if (userName.trim().length > 6) {
        console.log('UserName is Valid ')
    }
    else{
        console.log('UserName is invalid ')
        
    }

    
    if (password.trim().length > 5) {
        console.log('password is Valid ')
    }
    
    else{
        console.log('password is invalid ')
        
    }




})