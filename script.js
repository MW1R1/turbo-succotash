// code to handle form submission
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const email = event.target.querySelector("input[type=email]").value;
if (email !== "") {
alert(`Thank you for signing up with email: ${email}`);
event.target.reset();
} else {
alert("Please enter a valid email address.");
}
}