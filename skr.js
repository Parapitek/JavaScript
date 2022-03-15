let arr = []
const n = 10
for (let i=0;i<n; i++) {
	arr[i]=Math.floor(Math.random()*10)
}
console.log(arr) 
function show() {
let age = parseInt(document.getElementById('age').value)
if (age < 10) {console.log('Вы ребенок')}
else if (age < 17) {console.log('Вы подросток')}
else if (age > 60) {console.log('Вы пожилой')}
else {console.log('Вы взрослый')}
}  