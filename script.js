fetch('https://jsonplaceholder.typicode.com/posts?utm_source=chatgpt.com')

    .then(response => response.json())

    .then(data => console.log(data))

    .catch(error => console.log(error));