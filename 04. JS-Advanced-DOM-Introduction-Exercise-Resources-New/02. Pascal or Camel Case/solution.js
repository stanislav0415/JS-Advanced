function solve() {
 
 const input = document.querySelector('#text').value.toLowerCase().split(' ');
  const conversion = document.querySelector('#naming-convention').value.toLowerCase();
  const resultEl = document.querySelector('#result')

  if (input === '' || conversion === '') {
    return;
  }

  let result = '';

  if(conversion == 'camel case' ){

    console.log(input.slice(1));
    

    result = input[0] + input.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join('')
     
  }else if (conversion == 'pascal case' ){

    result = input.map((word) => word[0].toUpperCase() + word.slice(1)).join('')
     
  } else {
        result = 'Error!'
  }

  resultEl.textContent = result;
}