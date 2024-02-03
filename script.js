//DOM
let cajaImg = document.getElementById('cajaImg');
let miniatura1 = document.getElementById('miniatura1');
let miniatura2 = document.getElementById('miniatura2');
let miniatura3 = document.getElementById('miniatura3');
let miniatura4 = document.getElementById('miniatura4');
let miniatura5 = document.getElementById('miniatura5');
let botonDer = document.getElementById('botonDer');
let botonIzq = document.getElementById('botonIzq');
let botonPausar = document.getElementById('botonPausar');

//VARIABLES
let arrayImg = ['img_1.jpg','img_2.jpg','img_3.jpg','img_4.jpg','img_5.jpg'];
let cont=0;
let intervalo;//variable para almacenar el intervalo para que sea mas manejable
let pausar=false;





//FUNCIONES

cajaImg.innerHTML = '<img src="img/img_1.jpg" alt="">'

//esta función me sirve tanto para el automático como para el botón de avanzar ya que hacen lo mismo
function avanzarSlider(){
    cont++;
    if(cont <arrayImg.length){
        cajaImg.innerHTML = '<img src="./img/' + arrayImg[cont] + '">';
    }else{
        cont = 0;//reinicia el contador cuando llega a la final
        cajaImg.innerHTML = '<img src="./img/' + arrayImg[cont] + '">';
    }
}

function botonRetroceder(){
    cont--;
    if(cont > 0){
        cajaImg.innerHTML = '<img src="./img/' + arrayImg[cont] + '">';
    }else{
        cont=arrayImg.length-1;
        cajaImg.innerHTML = '<img src="./img/' + arrayImg[cont] + '">';
    }
}

//en esta función se obtiene un parámetro según la miniatura que haya pulsado, y este lo asigna a la posición la imagen en el array
function cambiarPorMiniaturas(posicion){
    cajaImg.innerHTML = '<img src="./img/' + arrayImg[posicion] + '">';
}

function pausarSlider(){
    if(pausar===false){
        clearInterval(intervalo);
        pausar=true;
        botonPausar.innerText = 'Reanudar'; 
    }else{
        intervalo = setInterval(avanzarSlider,10000);
        pausar=false;
        botonPausar.innerText = 'Pausar';
    }
    
}




intervalo = setInterval(avanzarSlider,10000);//aquí se establece el slider automático


miniatura1.addEventListener('click', function() {
    clearInterval(intervalo);
    cambiarPorMiniaturas(0);
    cont = 0;
    intervalo = setInterval(avanzarSlider,10000);

});
miniatura2.addEventListener('click', function() {
    clearInterval(intervalo);
    cambiarPorMiniaturas(1);
    cont = 1;
    intervalo = setInterval(avanzarSlider,10000);

});
miniatura3.addEventListener('click', function() {
    clearInterval(intervalo);
    cambiarPorMiniaturas(2);
    cont = 2
    intervalo = setInterval(avanzarSlider,10000);

});
miniatura4.addEventListener('click', function() {
    clearInterval(intervalo);
    cambiarPorMiniaturas(3);
    cont = 3;
    intervalo = setInterval(avanzarSlider,10000);

});
miniatura5.addEventListener('click', function() {
    clearInterval(intervalo);
    cambiarPorMiniaturas(4);
    cont = 4;
    intervalo = setInterval(avanzarSlider,10000);

});


botonDer.addEventListener('click',avanzarSlider);
botonIzq.addEventListener('click',botonRetroceder)

botonPausar.addEventListener('click',pausarSlider);