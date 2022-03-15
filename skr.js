let students = []
let max_id = -1

function LoadFromSite() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
@@ -8,10 +7,9 @@ function LoadFromSite() {
	});
}
function show_table() {
	let table = $('#tbl_all')
	let tbody = $('#tbl_all>tbody')
	tbody.html('')
	for (let i=0; i < students.length; i++) {
		if (i > max_id) {
			max_id = i
		let tr = $('<tr></tr>')

		let td1 = $('<td>' + students[i].id + '</td>')
@@ -21,8 +19,7 @@ function show_table() {

		tr.append(td1).append(td2).append(td3).append(td4) 

		table.append(tr)
		}
		tbody.append(tr)
	}
}

function show_info(id) {
	let div = $('#info')
	let header = $('<h1>Информация о студенте №' + id + '</h1>')
	let name = $('<h3>' + students[id].name + ' ' + students[id].surname + '</h3>')
	let img = $('<img src="http:/http://217.71.129.139:4035/' + students[id].logo + '">')
	
	div.html('')
	div.append(header).append(name).append(img)
}