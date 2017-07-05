var mainForm = document.querySelector('.form');

var inputSum = mainForm.querySelector('input[id=sum]');
var inputTime = mainForm.querySelector('input[id=time]');
var inputINN = mainForm.querySelector('input[id=inn]');
var inputSurname = mainForm.querySelector('input[id=surname]');
var inputName = mainForm.querySelector('input[id=name]');
var inputCity = mainForm.querySelector('input[id=city]');

var dataSum = mainForm.querySelector('#data-sum');
var dataTime = mainForm.querySelector('#data-time');
var dataINN = mainForm.querySelector('#data-inn');
var dataSurname = mainForm.querySelector('#data-surname');
var dataName = mainForm.querySelector('#data-name');
var dataCity = mainForm.querySelector('#data-city');

var inputsArray = [inputSum, inputTime, inputINN, inputSurname, inputName, inputCity];
var dataArray = [dataSum, dataTime, dataINN, dataSurname, dataName, dataCity];

var showInsertData = function (input, dataWrap) {
    input.addEventListener('blur', function () {
        dataWrap.innerHTML = input.value;
    });
};

for (var i = 0; i < inputsArray.length; i++) {
    showInsertData(inputsArray[i], dataArray[i]);
}
