let counter = document.querySelector(".counter-number");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let napbody = document.querySelector(".nap");


let count = 0;
let interval;
let pausee = false;

const startFun = () => {
    interval = setInterval(startIncrece,100)
};

function startIncrece(){
    count++
    counter.innerHTML = count
};

const pauseinterVal = () =>{
    if (counter.innerHTML == 00){
        
    }
    else{
        if(pausee === false){
        clearInterval(interval);
        pause.innerHTML = "Resume";
        pausee = true;
        }
        else{
            interval = setInterval(startIncrece,100);
            pause.innerHTML = "Pause";
            pausee = false;
        }
    }
};


const resetFun = () =>{
    count = 0;
    counter.innerHTML = count;

    if(pausee === false){
        clearInterval(interval);
        pausee = true;
    }
}

const napAdd = () =>{
    napbody.innerHTML += `<li> Nap: ${count}</li>`;

};