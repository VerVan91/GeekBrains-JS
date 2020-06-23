let modalWindow = document.querySelector('.wrap');
let modalSpan = document.querySelector('span');
let modalBtn = document.querySelector('button');

modalBtn.addEventListener('click', function () {
    modalWindow.classList.remove('hidden', 'animate__backOutRight')
    modalWindow.classList.add('animate__animated', 'animate__backInLeft')
});

modalSpan.addEventListener('click', function () {
    modalWindow.classList.remove('animate__backInLeft')
    modalWindow.classList.add('animate__backOutRight')
});







