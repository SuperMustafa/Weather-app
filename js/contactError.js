var error=document.querySelectorAll(".error");




for(var i=0;i<error.length;i++){
    error[i].addEventListener("click",function(){
        if(location.href=="file:///E:/Frontend/Deliverd%20Assignments/js-assignment-5/contact.html"){
            open("file:///E:/Frontend/Deliverd%20Assignments/js-assignment-5/error.html")
        }
    })
}

