{'id':4, 'name':'Vladimir','surname':'Burikin'},
{'id':5, 'name':'Semen','surname':'Veligjanin'}
]
for (let i=0; i<students.length; i++) {
	console.log(students[i].surname+' '+students[i].name)
let current = 0

function load_student(id) {
	document.getElementById('name').value = students[id].name
	document.getElementById('surname').value = students[id].surname
}

function next() {
	load_student(current)
	current++
} 