var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.png'){
        myImage.setAttribute('src', 'images/2.jpg');
    }else {
        myImage.setAttribute('src', 'images/1.png');
    }
}

function multiply(num1, num2){
    result = num1 * num2;
    return result;
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please, enter you name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The Witcher, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'The Witcher, ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}
//document.querySelector('html').onclick = function(){
//    alert('Ouch! Stop poking me!');
//}
