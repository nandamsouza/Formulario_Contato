const button = document.getElementById('button');
button.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email')
    const nome = document.getElementById('nome')

    if (email.value == '') {
        email.classList.add("erro-input")
    } else {
        email.classList.remove("erro-input")
    }
     if (nome.value == '') {
         nome.classList.add("erro-input")
     } else {
         nome.classList.remove("erro-input")
    }

if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf("@") - email.value.indexOf(".") == 1)) {
        email.classList.add("erro-input")
} else {
        email.classList.remove("erro-input")
    }

})