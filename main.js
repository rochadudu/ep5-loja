const container = document.querySelector('.container')
const signIn = document.querySelector('.link.signIn')
const signUp = document.querySelector('.link.signUp')
const formInput = document.querySelectorAll('.form_input')
const input = document.querySelectorAll('.form_input input')
const btnSignUp = document.querySelector('.btn.btnSignUp')
const btnSigIn = document.querySelector('.btn.btnSignIn')
const textField = document.querySelector('#data_fields1 .form_input input[type="text"]')
const emailField = document.querySelector('#data_fields1 .form_input input[type="email"]')
const passwordField = document.querySelector('#data_fields1 .form_input input[type="password"]')
console.log(formInput)

signIn.addEventListener('click', function(e) {
    e.preventDefault()
    container.classList.add('active')
})

signUp.addEventListener('click', function(e) {
    e.preventDefault()
    container.classList.remove('active')
})

input.forEach((item, index) => {
    item.addEventListener('focus', () => {
        formInput[index].classList.add('active')
    })

    item.addEventListener('blur', () => {
        formInput[index].classList.remove('active')
    })
})

btnSignUp.addEventListener('click', (e) => {
    e.preventDefault()
})

btnSigIn.addEventListener('click', (e) => {
    e.preventDefault()
})