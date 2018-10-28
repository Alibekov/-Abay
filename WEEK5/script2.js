function f(e){
	 var rep =document.getElementsByTagName("img")[0].src = e.target.src;
}
document.body.addEventListener('click', f, false);