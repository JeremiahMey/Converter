// Set current time
const currentTime = setInterval(time, 1000);

// var to hold converted number
let newHeight;
let newWeight;

// current time
function time() {
    //set time var
    const time = new Date();
    // Show time on page
    document.querySelector('#time').innerHTML = time.toLocaleString();
}


function getHeight(e) {
    if (document.querySelector('#height').value === '') {
        alert('Add a height');
    }
    else {
        let oldHeight = document.querySelector('#height').value;

        document.querySelector('#height-convert').innerHTML = oldHeight;
    }
    
}


function getWeight() { 
    if (document.querySelector('#weight').value === '') {
        alert('Add a weight');
    }
    else {
        let oldWeight = document.querySelector('#weight').value;
        newWeight = convertWeight(oldWeight);
        addH5(newWeight);
        //document.querySelector('#weight-convert').innerHTML = newWeight;
    }
}

function addH5(weight) {
    // Create h5 element
    const h5 = document.createElement('h5');
    // Add class
    h5.className = 'convertedWeight';
    // Create text node and append to h5
    let w = document.createTextNode(weight);
    h5.appendChild(w);
    document.querySelector('#weight-convert').appendChild(h5);
}

function convertWeight(weight) {
    newWeight = weight / 2.2046;
    newWeight = newWeight.toFixed(2).toString();
    return 'Your weight in kilograms is ' + newWeight + ' kg';
}

// Load all event listeners
// function loadEventListeners(){
//     // convert weight
//     formWeight.addEventListener('onclick', convertWeight());
// }

// function convertWeight() {
//     if(textWeight.value === '') {
//         alert('Add a weight');
//     }
//     // Create h5 element
//     const h5 = document.createAttribute('h5');
//     // Add class
//     h5.className = 'convertedWeight';
//     // Create text node and append to h5
//     h5.appendChild(document.createTextNode(textWeight.value));
//     weightConvert.appendChild(h5);



//     e.preventDefault();
//     console.log(e.preventDefault());
// }

