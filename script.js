function searchBooks() {
    // Get the text from the search input
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Get all book items
    const books = document.querySelectorAll('.book-item');

    // Flag to check if any books match the search
    let booksFound = false;

    // Filter books based on title
    books.forEach((book) => {
        const title = book.querySelector('.book-title').textContent.toLowerCase();
        if (title.includes(query)) {
            book.style.display = 'block'; // Show book if match
            booksFound = true;
        } else {
            book.style.display = 'none'; // Hide book if no match
        }
    });

    // Show "No books found" message if no books match the search
    const noResultsMessage = document.getElementById('no-results-message');
    if (booksFound) {
        noResultsMessage.style.display = 'none'; // Hide message if books found
    } else {
        noResultsMessage.style.display = 'block'; // Show message if no books found
    }
}
