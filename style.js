let box=document.getElementById('box');
addEventListener('mousedown',down)

function down(ev){
	let divx=ev.clientX-box.offsetLeft;
	let divy=ev.clientY-box.offsetTop;
}
