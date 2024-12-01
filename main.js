let value = document.getElementById('value');
let hidden = document.getElementById('hidden');
let animated = document.getElementById('animated');
let numb = document.getElementById('numb')

let circular = document.getElementById("circular")
let circle = document.getElementById("circle")
let leftProgress = document.getElementById("leftProgress")
let rihgtProgres = document.getElementById("rightProgress")


value.addEventListener('change', ()=> {
    
    numb.textContent = value.value + "%";
    if(value.value > 100 ){

        leftProgress.style.transform = `rotate(0.5turn)`;
        rihgtProgres.style.transform = `rotate(0.5turn)`;

    }else if(value.value < 0 ){

        leftProgress.style.transform = `rotate(0turn)`;
        rihgtProgres.style.transform = `rotate(0turn)`;

    }else if(value.value > 50){

        leftProgress.style.transform = `rotate(0.5turn)`;
        rihgtProgres.style.transform = `rotate(${(value.value-50)/100}turn)`;

    }else{

        leftProgress.style.transform = `rotate(${value.value/100}turn)`;
        rihgtProgres.style.transform = `rotate(0turn)`;
        
    }
})

animated.addEventListener('change', function() {
    if (this.checked) {
        circle.classList.add("animated")
    } else {
        circle.classList.remove("animated")
    }
});

hidden.addEventListener('change', function() {
    if (this.checked) {
        
        circular.style.display = 'none'
    } else {
        circular.style.display = 'block'
    }
});