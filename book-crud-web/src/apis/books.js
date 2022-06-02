export function getBookApi() {
    return fetch('http://localhost:4000/books')
        .then(res => res.json())
        .catch(data => data)
}

export function addBookApi(book) {
    return fetch('http://localhost:4000/books', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(res => res.json())
        .catch(data => data)
}

export function updateBookApi(book) {
    return fetch(`http://localhost:4000/books/${book._id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(res => res.json())
        .catch(data => data)
}

export function deleteBookApi(id) {
    return fetch(`http://localhost:4000/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(data => data)
}