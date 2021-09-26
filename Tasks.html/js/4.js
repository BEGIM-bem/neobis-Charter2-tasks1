

let p = document.querySelectorAll('p')

p.forEach((item) => {
    item.insertAdjacentHTML('afterend', '<hr/>');
});