const toggleBackground = document.getElementById('navbar'); 

function changeBG() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toggleBackground.className = "toggleBackground";
  } else {
    toggleBackground.className = "";
  }
}
window.addEventListener('scroll',() => {
	// if( window.innerHeight + window.scrollY >= document.body.offsetHeight -200){
		changeBG();
	
});