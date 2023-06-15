let selectElem = document.getElementById('rate');
let myRange = document.getElementById('myrange');


const button1 = document.getElementById('rang-1');
const button2 = document.getElementById('rang-2');
const button3 = document.getElementById('rang-3');
const scrollPoint = document.getElementById('scrollPoint');

function CalculateRender() {
    let result = selectElem.value *  myRange.value;
    document.querySelector('.out-1').innerHTML = myRange.value;
    document.querySelector('.out-2').innerHTML = result;
    
};

const element = document.querySelector('#about');

function scroll() {
    scrollPoint.scrollIntoView();
};
function changeBorderColor() {
    selectElem.style.borderColor = "red";
    setTimeout(function() {
        selectElem.style.borderColor = "rgb(133, 133, 133)";
    }, 3000);
  };

myRange.addEventListener("input", function() {
    let thisRange = (this.value);
    document.querySelector('.out-1').innerHTML = thisRange;
    
    if (myRange.value === undefined) {
        myRange.value = 1600;
    }
    CalculateRender();
});

     // клик на кнопку
    button1.addEventListener('click', () => {
        selectElem.value = '800';
        changeBorderColor();
        scroll();
        CalculateRender();
    });
    button2.addEventListener('click', () => {
        selectElem.value = '1600';
        changeBorderColor();
        scroll();
        CalculateRender();
    });
    button3.addEventListener('click', () => {
        selectElem.value = '3000';
        changeBorderColor();
        scroll();
        CalculateRender();
    });


    // Тут  код, который будет выполняться при выборе определенного option

selectElem.addEventListener("change", function() {
    let selectedOption = this.value;
        
    if (selectedOption === "800") {
        CalculateRender();
    
    } else if (selectedOption === "1600") {
        CalculateRender();
        
    } else if (selectedOption === "3000") {
        CalculateRender();
         
    }
    });




   






































    
//     let dataRange;
//     let dataRate;

// document.getElementById("rate").addEventListener("load", function() {
//     dataRate = (this.value);
//     document.querySelector('.out-2').innerHTML = (dataRange * dataRate);
// });

// document.getElementById("myrange").addEventListener("input", function() {
//     dataRange = (this.value);
//     document.querySelector('.out-1').innerHTML = dataRange;
    
//     if (dataRate === undefined) {
//         dataRate = 1600;
//     }
//     document.querySelector('.out-2').innerHTML = (dataRange * dataRate);
// });
	