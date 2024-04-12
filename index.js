function fetchBooks() {
  // Make a fetch request to the API endpoint
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      // Parse the JSON response and return the data
      return response.json();
    })
    .then(data => {
      // Once data is received, render the books
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching or rendering books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});