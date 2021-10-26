const myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");

    if(mySrc === "/images/firefox-icon.png"){
        myImage.setAttribute('src','/images/firefox2.png');
    }
    else if(mySrc === "/images/firefox2.png"){
        myImage.setAttribute("src","/images/firefox-icon.png");
    }
}
const Button = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName(){
    let userName = prompt("Enter your name");
    if(!userName){
        setUserName()
    }else{

        // if(!localStorage.getItem("name")){
        //     setUserName();
        // }else{
            localStorage.setItem("name",userName);
    
            myHeading.textContent = 'Mozilla is cool, ' + userName;
        // }
    }
}
  if(!localStorage.getItem("name")){
            setUserName();
        }else{
            let Name =localStorage.getItem("name");
    
            myHeading.textContent = 'Mozilla is cool, ' + Name;
        }
Button.onclick = function(){
    setUserName();
}