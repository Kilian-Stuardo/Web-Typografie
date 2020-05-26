var Bgtoggle = document.getElementById('Bgtoggle');

Bgtoggle.addEventListener('click',function() {
    document.body.classList.toggle('Bgclass');
});

if (document.body.classList) {
    setTimeout(() => {
        document.body.classList.remove('Bgclass').delay(4000)
    }, 20000);
}
