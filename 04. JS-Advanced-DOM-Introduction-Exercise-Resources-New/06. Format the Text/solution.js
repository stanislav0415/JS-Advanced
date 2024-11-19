function solve() {
  const inputEl = document.querySelector('#input')
  const outputEl = document.querySelector('#output')

  if (inputEl.value == '') return;
  
  const sentances = inputEl.value.split('. ')
  const sentancesPerParagraph =3;

  const numberOfParagraphs = Math.ceil(sentances.length / sentancesPerParagraph)
 
  console.log(sentances, numberOfParagraphs);
  
  let output = '';

  for (let i = 0; i < numberOfParagraphs; i++) {
    const p = i * numberOfParagraphs;
    const text = sentances.slice(p, (p + sentancesPerParagraph)).join('. ')
    output += `<p>${text}</p>`
  }

  outputEl.innerHTML = output



}