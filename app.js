
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let body = document.querySelector('body');
let phoneImage = document.querySelector('.phone');
let imagebutton = document.querySelector('.image-button')
let imagebutton2 = document.querySelector('.image-button2')
let paragraph = document.querySelector('.change')
let imagineLogo = document.querySelector('.imagineLogo');

//COLORS BUTTON
button1.addEventListener('click',function(e){
document.body.style.backgroundColor = '#13a8a0'
if(phoneImage.src !='/images/image1.jpg'){
   phoneImage.src ='/images/image1.jpg';}
})
button2.addEventListener('click',function(e){
document.body.style.backgroundColor = '#3f535c'
if(phoneImage.src !='/images/image2.png'){
   phoneImage.src ='/images/image2.png';}
})
button3.addEventListener('click',function(e){
document.body.style.backgroundColor = '#d5d5d0'
if(phoneImage.src !='/images/image3.png'){
   phoneImage.src ='/images/image3.png';}
})

//ARROWS
imagebutton.addEventListener('click', function(){
if(paragraph.innerHTML==='Battery : 4200 mAh'){
 paragraph.innerHTML='Proccesor : Quad-Core';
 imagineLogo.src = '/images/processor.webp';
}
else if(paragraph.innerHTML==='Proccesor : Quad-Core'){
 paragraph.innerHTML='Screen : LED 5.5 inch'
 imagineLogo.src='/images/bitcoin.webp'

}
else if(paragraph.innerHTML==='Screen : LED 5.5 inch'){
paragraph.innerHTML='Battery : 4200 mAh'
imagineLogo.src = '/images/battery.png';
}

})



imagebutton2.addEventListener('click',function(){
 if(paragraph.innerHTML==='Screen : LED 5.5 inch'){
  paragraph.innerHTML='Proccesor : Quad-Core'
  imagineLogo.src = '/images/processor.webp'
 }
 else if(paragraph.innerHTML==='Proccesor : Quad-Core'){
paragraph.innerHTML='Battery : 4200 mAh'
imagineLogo.src = '/images/battery.png'
 }
 else if(paragraph.innerHTML==='Battery : 4200 mAh'){
  paragraph.innerHTML = 'Screen : LED 5.5 inch'
  imagineLogo.src = '/images/bitcoin.webp'
 }

})

