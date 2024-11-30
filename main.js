let value = document.getElementById('value');
let hidden = document.getElementById('hidden');
let animated = document.getElementById('animated');
let numb = document.getElementById('numb')

let circle = document.getElementById("circle")
let leftProgress = document.getElementById("leftProgress")
let rihgtProgres = document.getElementById("rightProgress")

let animationStyles =  `
    @keyframes rotation{
        0% {
            transform: rotate(-90deg);
        }
        50% {
            transform: rotate(90deg);
        }
        100% {
            transform: rotate(270deg);
        }
    }
`

value.addEventListener('change', ()=> {
    console.log(value.value)
    //circle.style.transform = `rotate(${value.textContent})`;

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
        console.log("animated");
        circle.style.animation = 'rotation'
    } else {
        console.log("not animated");

    }
});

hidden.addEventListener('change', function() {
    if (this.checked) {
        console.log("hidden");
        circle.style.display = 'none'
    } else {
        console.log("not hidden");
        circle.style.display = 'block'
    }
});