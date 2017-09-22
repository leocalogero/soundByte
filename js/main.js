window.addEventListener('DOMContentLoaded',init);

function init() {
  document.getElementById('menu-hamburger').addEventListener('click',function(){
    this.classList.toggle('is-active');
    document.getElementById('header-nav-primary').classList.toggle('is-active');
  });
}
