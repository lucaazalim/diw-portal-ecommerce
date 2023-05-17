document.addEventListener('DOMContentLoaded', function () {

    fetch('/includes/header.html')
        .then(response => response.text())
        .then(content => document.getElementById('header').innerHTML = content)
        .catch(error => console.error(error));

    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(content => document.getElementById('footer').innerHTML = content)
        .catch(error => console.error(error));

});