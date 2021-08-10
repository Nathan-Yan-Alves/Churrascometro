var itemsPerHour = {
    // [Kids, Adults]
    "sausage": [0.15, 0.2],
    "beef": [0.1, 0.3],
    "chicken": [0.1, 0.2],
    "garlic_bread": [2, 3],
    "beer": [0, 6],
    "soft_drink": [0.3, 0.4],
    "juice": [0.25, 0.3]
};

function checkedElements(array) {
    let adults = parseInt(document.getElementById("adults").value);
    let kids = parseInt(document.getElementById("kids").value);
    let duration = parseInt(document.getElementById("duration").value);
    let generateCalc = document.getElementsByClassName("calc-generate")[0];
    let element;
    let result;

    for(let i = 0; i < array.length; i++) {
        if(array[i].checked == true) {
            element = array[i];
            result = ((itemsPerHour[element.id][0] * kids) + (itemsPerHour[element.id][1] * adults)) * duration;
            if(element.id != "garlic_bread" && element.id != "beer") {
                result = result.toPrecision(3);
            }
            generateCalc.innerHTML += `${element.labels[0].outerText}: ${result} `;
            if(element.id == "garlic_bread") {
                generateCalc.innerHTML += "unidades<br>";
            } else if(element.id == "beer") {
                generateCalc.innerHTML += "latas de cerveja<br>";
            } else if(element.name == "meats") {
                generateCalc.innerHTML += "Kg<br>";
            } else {
                generateCalc.innerHTML += "L<br>";
            }
        }
    }
}

function checkedCount(array) {
    let i = 0;
    for(let j = 0; j < array.length; j++) {
        if(array[j].checked == true) {
            i++;
        }
    }
    
    if(i == 0) {
        let h2 = array[0].parentElement.getElementsByTagName("h2")[0].outerText;

        alert(`Marque pelo menos uma opção de ${h2}`);
    }
}

function calculate() {
    let meats = document.getElementsByName("meats");
    let drinks = document.getElementsByName("drinks");
    
    document.getElementsByClassName("calc-generate")[0].innerHTML = " ";

    checkedCount(meats);
    checkedCount(drinks);

    checkedElements(meats);
    checkedElements(drinks);
}

document.getElementById("calc").addEventListener("click", calculate);