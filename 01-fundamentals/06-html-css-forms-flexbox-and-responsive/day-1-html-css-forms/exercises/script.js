let statesArr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let selectStates = document.querySelector('#state');

for (let state of statesArr) {
    let selectStatesItem = document.createElement('option');
    selectStatesItem.value = state;
    selectStatesItem.innerHTML = state;
    selectStates.appendChild(selectStatesItem);
}

function clearForm() {
    let formInputs = document.getElementsByTagName('input');
    let textArea = document.querySelector('#abstract');
    textArea.value = '';

    for (let input of formInputs) {
        input.value = '';
    }

}

let clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearForm);
