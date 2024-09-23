function generateReport() {
    const outputEl = document.querySelector('#output')
    const tHeadRow = document.querySelector('table thead tr')
    const tbodyRows = document.querySelectorAll('table tbody tr')

    const checkedInputElements = [...tHeadRow.children]
    .map((item, index)=> ({
      el: item.children[0],
      name: item.children[0].getAttribute('name'),
      index: index
    })).filter((item) => item.el.checked)

    const outputData = [...tbodyRows]
    .map((tr)=> {
        return checkedInputElements.reduce((acc,curr) => {
            acc[curr.name] = tr.children[curr.index].textContent;
            return acc; 
        }, {})
    })

   outputEl.value = JSON.stringify(outputData)
    
}