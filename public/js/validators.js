document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector("form")) {
        return;
    }

    document.querySelector("form").addEventListener("submit", function (event) {
        //bloqueia temporariamente o envio do formulario
        event.preventDefault();
        let form = document.querySelector('form');
        let resultElementTypeValidator = [];
        Array.from(form).forEach(function (element) {
            //a cada interacao dos elementos que contem o formulario
            //faz a validacao de acordo com o seu type
            //guardadno o resultado na variavel com o type, valor da validacao e o id do elemento
            var elementType = element.getAttribute("type")
            var id = element.getAttribute("id");
            if (elementType == "email") {
                resultElementTypeValidator.push({
                    type: "email",
                    value: validatorEmail(element),
                    id: id
                });
            }

            if (elementType == "text") {
                resultElementTypeValidator.push({
                    type: "text",
                    value: validatorText(element),
                    id: id
                });
            }


        });


        //rotina que armazena o valor se o elemento esta valido ou nao
        //e seta o estilo do elemento caso esteja invalodo
        //variavel invalid sera usado para verifica se ouve resultado com input invalido
        //caso tenha pelo menos um input invalido o formulario nao sera enviado
        var invalid = []
        resultElementTypeValidator.forEach(function (element) {

            if (!element.value) {
                let input = form.querySelector(`#${element.id}`);
                input.setAttribute("class", "input-error");
                input.value = "";
                input.setAttribute("placeholder", `O ${element.type} esta invalido tente novamente!`);
                invalid.push(false);
            }

        });

        var result = true;

        invalid.filter(function (value) {
            if (value == false) {
                return result = false;
            }


        });



        if (result) {
            return form.submit();
        }


    });
});

function validatorText(element) {
    return element.value == "" ? false : regexText(element.value);
}

function validatorEmail(element) {
    return element.value == "" ? false : regexEmail(element.value);
}

function regexEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function regexText(text) {
    var regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    return regex.test(text);
}
