function hideImage(){

    document.querySelector('.click-image').computedStyleMap.display = 'none';

    window.location.href='main3.html';

};

let countDown = 5;
 var x = setInterval(function (){

    document.querySelector('.countDown').innerHTML=countDown;

    countDown--;

    if( countDown <0){
        clearInterval(x);
    }
 },1000);

   


setTimeout(hideImage, 5000);
