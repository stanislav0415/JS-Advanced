function validate() {

    const pattern = /^.*@.*\..*$/g
    const emailEl = document.querySelector('#email')

    emailEl.addEventListener('change', (e) => {
        e.target.className = (!pattern.test(e.target.value)) ? 'error' : ''
    })
}