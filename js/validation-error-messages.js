jQuery.extend(jQuery.validator.messages, {
    required: "Обязательно поле",
    number: "Введите корректное значение",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Значение должно быть не больше {0} символов."),
    minlength: jQuery.validator.format("Значение должно быть не меньше {0} символов."),
    rangelength: jQuery.validator.format("Значение должно быть длинной от {0} до {1}."),
    range: jQuery.validator.format("Значение должно быть от {0} до {1}."),
    max: jQuery.validator.format("Число должно быть не больше {0}."),
    min: jQuery.validator.format("Число должно быть не меньше {0}.")
});