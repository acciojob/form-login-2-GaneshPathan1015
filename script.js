//your JS code here. If required.
const name = document.querySelector("#name")
const lname = document.querySelector("#lname")
const pnumber = document.querySelector("#pnumber")
const email = document.querySelector("#email")

const form = document.querySelector("form")

form.addEventListener("submit",alt)
function alt(){
	alert(`First Name : ${name.value} Last Name : ${pnumber.value} `)
}
