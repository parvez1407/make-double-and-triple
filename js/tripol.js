document.getElementById('make-tripel').addEventListener('click', function () {
    const newInputValue = getInputValueById('input-field');
    if (isNaN(newInputValue)) {
        alert('please provide a valid number');
        return;
    }
    const makeDouble = newInputValue * 3;
    setElementValueById('tripol-value', makeDouble);
})