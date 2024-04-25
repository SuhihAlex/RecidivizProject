/*====== BURGER ======*/
function burgerMenu() {
  const menuToggle = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрет прокрутки страницы при открытом меню
  } else {
    menuToggle.classList.remove('active');
    document.body.style.overflow = ''; // Разрешение прокрутки страницы при закрытом меню
  }
}

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('open');
});


/*====== MODAL ======*/

function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.classList.add('open');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('open');
}