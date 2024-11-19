function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const studentListRows = document.querySelectorAll('table tbody tr')
      const searchFieldEl = document.querySelector('#searchField')
      const searchStr = searchFieldEl.value.toLowerCase()

      const studentList = [...studentListRows].map((el)=> el.innerText.toLowerCase())

      if (searchStr == '') {
         return;
      }
      const result = [];

      studentListRows.forEach(el => {
         el.classList.remove('select')
      }) 

      for (let i = 0; i< studentList.length; i++) {
      if (studentList[i].indexOf(searchStr) >= 0) {
         result.push(i)
      }
       result.forEach((pos, index) => {
         studentListRows[pos].classList.add('select')
       })



      }
    searchFieldEl.value = '';
   }
}