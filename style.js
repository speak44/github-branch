let box=document.getElementById('box');
addEventListener('mousedown',down)
addEventListener('mousemove',move)
function down(ev){
	let divx=ev.clientX-box.offsetLeft;
	let divy=ev.clientY-box.offsetTop;
}
function move(ev){
	let newx=ev.clientX-divx;
	let newy=ev.clientY-divy;
	box.style.left=newx+'px';
	box.style.top=newy+'px';
	ev.preventDefault()
}
