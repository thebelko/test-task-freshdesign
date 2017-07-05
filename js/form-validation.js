var inputINN = document.querySelector('input[id=inn]');

var validateDateOfBirth = function (errorMessage) {
    var dateOfBirth = new Date(1900,00,01);
    var currentDate = new Date();
    dateOfBirth.setDate(dateOfBirth.getDate() + +(inputINN.value.slice(0, -5)));
    var years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    if (years >= 21) {
        if (errorMessage) {
            document.querySelector('.input-wrap--inn').removeChild(errorMessage);
        } else {
            return true;
        }
    } else if (years < 21 && errorMessage) {
        return true;
    } else {
        inputINN.classList.add('error');
        if(inputINN.classList.contains('valid')) {
            inputINN.classList.remove('valid');
        }
        inputINN.setAttribute('aria-invalid', 'true');

        var labelError = document.createElement('label');
        labelError.classList.add('error');
        labelError.setAttribute('id', 'inn-error-age');
        labelError.innerHTML = 'Вам меньше 21 года';
        document.querySelector('.input-wrap--inn').appendChild(labelError);
    }
};

inputINN.addEventListener('blur', function () {
    validateDateOfBirth(document.querySelector('label[id=inn-error-age]'));
});


var form = $("#form");

$.validator.addMethod('nameletters', function (value) {
    var result = true;
    for (var i = 0; i < value.length; i++) {
        if(!/^[А-ЯЁ][а-яё]*$/i.test(value)){
            return false;
        }
    }
    return result;
}, 'Допустимы только русские буквы');

$.validator.addMethod('innnumber', function (value) {
    var result = true;
    for (var i = 0; i < value.length; i++) {
        if(!/^\d{10}$/.test(value)){
            return false;
        }
    }
    return result;
}, 'Должно быть 10 цифр');

form.validate({
    rules: {
        surname: {
            required: true,
            nameletters: true
        },
        name: {
            nameletters: true
        },
        inn: {
            innnumber: true
        }
    }
});

