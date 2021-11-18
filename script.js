const emailInput = document.querySelector('.input-email')
const form = document.querySelector('.form')
const inputError = document.querySelector('.input-error')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    console.log(emailInput.value)
    if(emailInput.value === ''){
        e.preventDefault()
        inputError.classList.remove('hidden')
    }else if(!validateEmail(emailInput.value)){
        e.preventDefault()
        inputError.classList.remove('hidden')
    }
})