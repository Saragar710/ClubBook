const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#club-name').value.trim();
    const needed_funding = document.querySelector('#club-funding').value.trim();
    const description = document.querySelector('#club-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/clubs`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
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
        document.location.replace('/profile');
      } else {
        alert('Failed to delete club');
      }
    }
  };
  
  document
    .querySelector('.new-club-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.club-list')
    .addEventListener('click', delButtonHandler);