}

function next() {
if (current < students.length) {
	load_student(current)
	document.getElementById('btnprev').disabled = false
	current++
	load_student(current)

	if (current == 4) {
		document.getElementById('btnnext').disabled = true
	}
}
else{
	document.getElementById('btnnext').disabled = true
}

function prev() {
	document.getElementById('btnnext').disabled = false
	current--
	load_student(current)

	if (current == 0) {
		document.getElementById('btnprev').disabled = true
	}
}
