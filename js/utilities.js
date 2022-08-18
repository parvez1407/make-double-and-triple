function getInputValueById(inputId) {
    const inputfield = document.getElementById(inputId);
    const inputFieldValueString = inputfield.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputfield.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const elementVale = document.getElementById(elementId);
    const elementValeString = elementVale.innerText;
    const newElenentValue = parseFloat(elementValeString);
    return newElenentValue;
}

function setElementValueById(elementId, newValue) {
    const newElenentValue = document.getElementById(elementId);
    newElenentValue.innerText = newValue;
}