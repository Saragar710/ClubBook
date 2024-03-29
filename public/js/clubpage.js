const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#club-name').value.trim();
   
    const description = document.querySelector('#club-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/clubs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/club');
      } else {
        alert('Unable to create club');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/clubs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/club');
      } else {
        alert('Failed to delete club');
      }
    }
  };
  
  document
    .querySelector('.new-club-form')
    .addEventListener('create', newFormHandler);
  
  document
    .querySelector('.club-list')
    .addEventListener('click', delButtonHandler);

    document.querySelector('#logout').addEventListener('click', logout);
    document.querySelector('#main').addEventListener('click', main);