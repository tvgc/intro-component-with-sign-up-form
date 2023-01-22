const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')
const submitButton = document.querySelector('.submit-btn')
const errorMessage = document.querySelector('.error-message')

/*fazer com que apareçam as frases de error de falta de input em todos os inputs. fazer tambem com que apareça a outra frase quando o email não estiver no padrão correto no input de email. falta ainda fazer interações de hover com os inputs e botões*/

form.addEventListener('submit', event => {
    event.preventDefault();
    
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validatePassword(password)
})

const validateFirstName = (firstName) => {
    if(firstName.value===''){
        setError(firstName)        
    } else {
        setSuccess(firstName)
    }
}

const validateLastName = (lastName) => {
    if(lastName.value===''){
        setError(lastName)        
    } else {
        setSuccess(lastName)
    }
}

const validateEmail = (email) => {
    if(isValidEmail(email.value)){
        setSuccess(email)
    } else if(email.value === '') {
        setError(email)
    } else {
        setError(email)
    }
}

const validatePassword = (password) => {
    if(password.value===''){
        setError(password)        
    } else {
        setSuccess(password)
    }
}

const setSuccess = (element) => {
    element.parentElement.classList.remove('error');
    element.parentElement.classList.add('success');
}

const setError = (element) => {
    element.parentElement.classList.remove('success');
    element.parentElement.classList.add('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// const messageErrorOutput = (element) => {
//     const parentInput = element.parentElement
//     parentInput.querySelector('.error-message').textContent = "cannot be empty"
//     console.log('deu certo')
// }


/*const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.textContent = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = ()=>{
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(firstNameValue==='') {
        setError(username, 'First Name cannot be empty')
    } else {
        setSuccess(username)
    }

    if(emailValue===''){
        setError(email, 'Looks like this not an email')
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Looks like this not an email')
    } else {
        setSuccess(email);
    }

    if(passwordValue==='') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password)
    }
}
*/
