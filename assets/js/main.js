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
    
    validateFirstName(firstName, 'First Name cannot be empty');
    validateLastName(lastName, 'Last Name cannot be empty');
    validateEmail(email);
    validatePassword(password, 'Password cannot be empty');
})

const validateFirstName = (firstName, message) => {
    if(firstName.value===''){
        setError(firstName);
        errorMessageDisplay(firstName, message)
    } else {
        setSuccess(firstName);
        errorMessageDisplayErase(firstName);
    }
}

const validateLastName = (lastName, message) => {
    if(lastName.value===''){
        setError(lastName);  
        errorMessageDisplay(lastName, message)      
    } else {
        setSuccess(lastName);
        errorMessageDisplayErase(lastName);
    }
}

const validateEmail = (email) => {
    if(isValidEmail(email.value)){
        setSuccess(email);
        errorMessageDisplayErase(email);
    } else if(email.value === '') {
        setError(email);        
        const outlineInput = email.parentElement;
        const inputContainer = outlineInput.parentElement;
        inputContainer.querySelector('.error-message').textContent = 'Email cannot be empty'
    } else {
        setError(email)
        const outlineInput = email.parentElement;
        const inputContainer = outlineInput.parentElement;
        inputContainer.querySelector('.error-message').textContent = 'Looks like this is not an email'
    }
}

const validatePassword = (password, message) => {
    if(password.value===''){
        setError(password);
        errorMessageDisplay(password, message)    
    } else {
        setSuccess(password);
        errorMessageDisplayErase(password);
    }
}

const setSuccess = (element) => {
    element.parentElement.classList.remove('error');
    element.parentElement.classList.add('success');
}

const setError = (element) => {
    const inputControl = element.parentElement;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const errorMessageDisplay = (element, message) => {
    const outlineInput = element.parentElement;
    const inputContainer = outlineInput.parentElement;
    inputContainer.querySelector('.error-message').textContent = message
}

const errorMessageDisplayErase = (element) => {
    const outlineInput = element.parentElement;
    const inputContainer = outlineInput.parentElement;
    inputContainer.querySelector('.error-message').textContent = ''
}