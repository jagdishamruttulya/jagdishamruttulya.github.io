const toggleBackground = document.getElementById('navbar'); 
const toggleMenu = document.getElementById('static-menu');

function changeBG() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toggleBackground.className = "toggleBackground";
  } else {
    toggleBackground.className = "";
  }
}
function changeToStaticMenu(x) {
  x.classList.toggle("change");
  toggleMenu.hidden=!toggleMenu.hidden;
}
window.addEventListener('scroll',() => {
	// if( window.innerHeight + window.scrollY >= document.body.offsetHeight -200){
		changeBG();
	
});