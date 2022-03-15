function show() {
let div = document.getElementById('mes')
let age = parseInt(document.getElementById('age').value)
if (age < 10) {div.innerHTML='<h1>Вы ребенок</h1>'}
else if (age < 17) {div.innerHTML='<h1>Вы подросток</h1>'}
else if (age > 60) {div.innerHTML='<h1>Вы пожилой</h1>'}
else {div.innerHTML='<h1>Вы взрослый</h1>'}
} 
let arr = []
const n = 10
for (let i=0;i<n; i++) {
	arr[i]=Math.floor(Math.random()*10)
}
console.log(arr) 