function addItem() {
   const menuEl = document.querySelector('#menu')

   const newItemTextEl = document.querySelector('#newItemText')
   const newItemValueEl = document.querySelector('#newItemValue')

   if (newItemTextEl.value == '' || newItemValueEl == '') {
    return
   }

   const newItem = document.createElement('option');
   newItem.textContent = newItemTextEl.value
   newItem.setAttribute('value', newItemValueEl.value)

   menuEl.appendChild(newItem)

   newItemTextEl.value = ''
   newItemValueEl.value = ''

   newItemTextEl.focus()
}