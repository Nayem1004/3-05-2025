const toggleBtn = document.getElementById('toggleBtn');
const sidenav = document.getElementById('sidenav');
const navRemove = document.getElementById('navRemove');

toggleBtn.addEventListener('click', () => {
  sidenav.classList.toggle('open');
  navRemove.classList.toggle('show');
});

navRemove.addEventListener('click', () => {
  sidenav.classList.remove('open');
  navRemove.classList.remove('show');
});