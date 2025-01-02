document.getElementById("send-message").addEventListener("click", function () {
  var form = document.getElementById("message-form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
document.getElementById("send").addEventListener("click", function (event) {
  event.preventDefault();
  alert("your message is recieved.");
});
