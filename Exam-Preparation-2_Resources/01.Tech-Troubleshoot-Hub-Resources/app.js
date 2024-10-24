function solution() {
  const formEl = document.querySelector('.conteiner-text > form');
  const addButtonEl = document.querySelector('#add-btn');

  const previewListEl = document.querySelector('.preview-list');
  const pendingListEl = document.querySelector('.prending-list');
  const resolvedListEl = document.querySelector('.resolved-list');

  const formFieldPrefix = ['From:', 'Category:', 'Urgency:', 'Assigned to:', 'Description:'];
  const formFields = Array.from(formEl.querySelectorAll('input, select')); 

  addButtonEl.addEventListener('click', (e) => {
    e.preventDefault();

    const emptyFieldsCount = formFields.filter((el) => el.value == '');
    if (emptyFieldsCount.length > 0) {
      return;
    }

    const problemListEl = document.createElement('li');
    const problemEl = document.createElement('article');

    problemListEl.className = 'problem-content';

    formFields.forEach((field, index) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = formFieldPrefix[index] + ' ' + field.value;
      paragraph.setAttribute('data-value', field.value);
      paragraph.setAttribute('data-field-id', field.getAttribute('id'));
      problemEl.appendChild(paragraph);
    });

    const editBtnEl = document.createElement('button');
    editBtnEl.className = 'edit-btn';
    editBtnEl.textContent = 'Edit'; 

    const continueBtnEl = document.createElement('button');
    continueBtnEl.className = 'continue-btn';
    continueBtnEl.textContent = 'Continue'; 

    problemListEl.appendChild(problemEl);
    problemListEl.appendChild(editBtnEl);
    problemListEl.appendChild(continueBtnEl);
    previewListEl.appendChild(problemListEl);

    editBtnEl.addEventListener('click', () => {
      eventHandlerEdit(problemListEl);
    });

    continueBtnEl.addEventListener('click', () => {
      eventHandlerEditContinue(problemListEl);
    });

    formEl.reset();
    addButtonEl.setAttribute('disabled', 'disabled');
  });

  function eventHandlerEdit(problemListEl) {
    problemListEl.remove();
    Array.from(problemListEl.children[0].children).forEach((entry) => {
      document.querySelector('#' + entry.getAttribute('data-field-id')).value = entry.getAttribute('data-value');
    });

    addButtonEl.removeAttribute('disabled');
  }

  function eventHandlerEditContinue(problemListEl) {
    problemListEl.remove();
    problemListEl.querySelector('button').remove(); 
    problemListEl.querySelector('button').remove(); 

    const resolvedBtnEl = document.createElement('button');
    resolvedBtnEl.className = 'resolve-btn';
    resolvedBtnEl.textContent = 'Resolve';

    resolvedBtnEl.addEventListener('click', () => {
      eventHandlerResolve(problemListEl);
    });

    problemListEl.appendChild(resolvedBtnEl);
    pendingListEl.appendChild(problemListEl); 
  }

  function eventHandlerResolve(problemListEl) {
    problemListEl.remove();
    problemListEl.querySelector('button').remove();

    const clearBtnEl = document.createElement('button');
    clearBtnEl.className = 'clear-btn';
    clearBtnEl.textContent = 'Clear'; 

    clearBtnEl.addEventListener('click', () => {
      eventHandlerClear(problemListEl);
    });

    problemListEl.appendChild(clearBtnEl);
    resolvedListEl.appendChild(problemListEl);
  }

  function eventHandlerClear(problemListEl) {
    problemListEl.remove();
    addButtonEl.removeAttribute('disabled');
  }
}



    
    
