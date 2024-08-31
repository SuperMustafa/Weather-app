var error=document.querySelectorAll(".error");




for(var i=0;i<error.length;i++){
    error[i].addEventListener("click",function(){
        if(location.href=="file:///E:/Frontend/Deliverd%20Assignments/weather%20App/contact.html"){
            open("file:///E:/Frontend/Deliverd%20Assignments/weather%20App/error.html")
        }
    })
}

