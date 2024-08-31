var error=document.querySelectorAll(".error");




for(var i=0;i<error.length;i++){
    error[i].addEventListener("click",function(){
        if(location.href=="contact.html"||location.href=="index.html"){
            open("error.html")
        }
    })
}

