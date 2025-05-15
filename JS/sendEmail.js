// gmail service service_gkjbc5n // EmailJS https://dashboard.emailjs.com/sign-in

// template template_dsuls05

//smilomziyako779@gmail.com
var submit = document.getElementById("submit");

function sendEmail() {
  let params = {
    reply_to: document.getElementById("email").value,
    from_name:
      document.getElementById("name").value +
      " " +
      document.getElementById("surname").value,
    message: document.getElementById("reason").value,
    number: document.getElementById("number").value,
  };

  console.log(params);
  emailjs
    .send("service_gkjbc5n", "template_yh44kuu", params)
    .then(alert("Your email has been sent"));
}

submit.addEventListener("click", function () {
  if (empty(document.getElementById("name").value)) {
    alert("Enter your name before submitting a request.");
  } else if (empty(document.getElementById("surname").value)) {
    alert("Enter your surname before submitting a request.");
  } else if (empty(document.getElementById("email").value)) {
    alert("Enter your email address before submitting a request.");
  } else if (empty(document.getElementById("number").value)) {
    alert("Enter your phone number before submitting a request.");
  } else if (empty(document.getElementById("reason").value)) {
    alert(
      "Enter your reason for making a request before submitting a request."
    );
  } else if (validateEmail(document.getElementById("email").value) == false) {
    alert("Invalide Email address.");
  } else {
    sendEmail();
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("number").value = "";
    document.getElementById("reason").value = "";
  }
});

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

function empty(str) {
  if (
    typeof str == "undefined" ||
    !str ||
    str.length === 0 ||
    str === "" ||
    !/[^\s]/.test(str) ||
    /^\s*$/.test(str) ||
    str === ""
  ) {
    return true;
  } else {
    return false;
  }
}
