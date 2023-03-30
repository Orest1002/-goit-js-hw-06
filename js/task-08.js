
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені.!");
  }

const obgect = {

  [email.name] : email.value.trim(),
        [password.name] : password.value.trim(),
        
}
console.log(obgect);
  event.currentTarget.reset();

};

  
