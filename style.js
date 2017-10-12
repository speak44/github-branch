addEventListener('mouseup',up)
function up(){
	removeEventListener('mousemove',move)
	removeEventListener('mousedown',down)
}
