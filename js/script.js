/*====== BURGER ======*/
// Function to toggle the burger menu
function burgerMenu() {
  const menuToggle = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling of the page when the menu is open
  } else {
    menuToggle.classList.remove('active');
    document.body.style.overflow = ''; // Allow scrolling of the page when the menu is closed
  }
}

// Event listener to toggle burger icon when clicked
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('open');
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
  const menuToggle = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Reset the burger icon when clicking outside of it
document.addEventListener('click', function(event) {
  const menuToggle = document.querySelector('.burger');
  
  if (!menuToggle.contains(event.target)) {
    menuToggle.classList.remove('open');
  }
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