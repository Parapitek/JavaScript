let students = []
let current = 0
let max_id = -1

function LoadFromSite() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
@@ -10,6 +10,8 @@ function LoadFromSite() {
function show_table() {
	let table = $('#tbl_all')
	for (let i=0; i < students.length; i++) {
		if (i > max_id) {
			max_id = i
		let tr = $('<tr></tr>')

		let td1 = $('<td>' + students[i].id + '</td>')
@@ -19,5 +21,6 @@ function show_table() {
		tr.append(td1).append(td2).append(td3)

		table.append(tr)
		}
	}
} 