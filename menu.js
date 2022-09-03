const setaNext = document.querySelector('.btn-seta');
const setaPrevious = document.querySelector('.btn-seta2');
const container = document.querySelector('.container');

const texto = document.querySelectorAll('.item a span');
setaNext.addEventListener('click', aumentaTamanho);
setaPrevious.addEventListener('click', diminuiTamanho);

function aumentaTamanho() {
    container.style.width = "300px";
    document.querySelector('.item').style.width = "270px";
    setaNext.style.display = "none"
    setaPrevious.style.display = "block";
texto.forEach(texto => {
    texto.style.display = "block"
    });
   
};

function diminuiTamanho(){
    document.querySelector('.container').style.width = "60px";
    document.querySelector('.item').style.width = "";
    setaPrevious.style.display = "none";
    setaNext.style.display = 'block';
    texto.forEach(texto => {
        texto.style.display = "none"
        });
    
};