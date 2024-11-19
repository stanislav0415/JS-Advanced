function validate() {
    
     const pattern = {
        username: /^[a-zA-Z0-9]{3,20}$/,
        email: /^.*@.*\..*$/,
        password:/^\w{5,15}$/,
        "confirm-password":/^\w{5,15}$/,
        companyNumber: /^\w{4,4}$/
     }
    const formEl = document.querySelector('#registerForm')
    const companyEl = document.querySelector('#company');
    const companyInfoEl = document.querySelector('#companyInfo')
    const validEl = document.querySelector('#valid')

    companyEl.addEventListener('change', (e)=> {
       companyInfoEl.style.display = (e.target.checked) ? 'block' : 'none'
    })

    formEl.addEventListener('submit', (e)=>{
        e.preventDefault()


       const invalidFields = []
       const inputFieldsForValidation =[...e.target.querySelectorAll('input:not([type="checkbox"])')];

       inputFieldsForValidation.forEach((fieldEl) => {
        
        if (type == 'companyNumber' && companyInfoEl.style.display == 'none') return 

        const type = fieldEl.getAttribute('id');
        const passwordEl = e.target.querySelector('#password')

       

        if (! pattern[type].test(fieldEl.value)) {
            fieldEl.style.borderColor = 'red'
            invalidFields.push(fieldEl)

        }else {
            fieldEl.style.borderColor = ''
        }

        if (type == 'confirm-password' && fieldEl.value != passwordEl.value) {
            invalidFields.push(fieldEl)
            invalidFields.push(passwordEl)
            fieldEl.style.borderColor = 'red'
            passwordEl.style.borderColor = 'red'
        }
       });

       validEl.style.display = (invalidFields.length == 0) ? 'block' : 'none'
       

    })
}
