
function makeRed() {

    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'White';
};

function makeBlue() {
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

function makePink() {

    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};


function makeOrange() {
    document.querySelector('#section4').style.backgroundColor = 'orange';
    console.log('Change background to orange');
};

function multicolor() {
    console.log('Change background to red');
   
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'White';
    document.querySelector('#section1').innerHTML = "hello" ;
    
    document.querySelector('#section2').style.backgroundColor = 'blue';
   
    document.querySelector('#section3').style.backgroundColor = 'pink';
    
    document.querySelector('#section4').style.backgroundColor = 'orange';
 
};


