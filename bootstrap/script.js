function myFunction() {
  var username = prompt("Enter your name: ");
  document.querySelector("#greeting").textContent = "Welcome " + username;
}