var form = $("#form");

form.children("div").steps({
    headerTag: "div",
    bodyTag: "section",
    transitionEffect: "fade",
    labels: {
        next: "Вперед",
        previous: "Назад"
    },
    enableFinishButton: false,
    onStepChanging: function (event, currentIndex, newIndex)
    {
        if (currentIndex > newIndex)
        {
            return true;
        }
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    }
});
