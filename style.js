addEventListener('mousemove',move)
function move(ev){
	let newx=ev.clientX-divx;
	let newy=ev.clientY-divy;
	box.style.left=newx+'px';
	box.style.top=newy+'px';
	ev.preventDefault()
}
