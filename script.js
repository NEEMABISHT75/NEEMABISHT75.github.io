document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();
  const responseMsg = document.getElementById("responseMsg");

  if (name && email && feedback) {
    responseMsg.textContent = `Thank you, ${name}, for your feedback!`;
    this.reset();
  } else {
    responseMsg.textContent = "Please fill in all fields.";
  }
});
