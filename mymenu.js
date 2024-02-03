window.addEventListener('scroll', function(){
    let header = document.querySelector('#nav');
    header.classList.toggle('roll', window.scrollY > 0);
})
