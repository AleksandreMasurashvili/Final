const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})
document.getElementById('btn').addEventListener('click', function() {
    alert('Your Booking has Confirmed');
});
document.getElementById('btn2').addEventListener('click', function() {
    alert('Your Booking has Confirmed');
});
document.getElementById('btn3').addEventListener('click', function() {
    alert('Your Booking has Confirmed');
});



