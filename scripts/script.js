const formEl = document.getElementById("puppy-play-date-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // How do we access the user input
    let nameValue = event.target.name.value;
    console.log("nameValue: ", nameValue);
    let emailValue = event.target.email.value;
    console.log("emailValue: ", emailValue);
    let phoneValue = event.target.phone.value;
    console.log("phoneValue: ", phoneValue);
    let contactMethodValue = event.target.contactMethod.value;
    console.log("contactMethodValue: ", contactMethodValue);
    let visitPurposeValue = event.target.visitPurpose.value;
    console.log("visitPurposeValue: ", visitPurposeValue);
    let agreeToFunChecked = event.target.agreeToFun.checked;
    console.log("agreeToFunChecked: ", agreeToFunChecked);

    let countryValue = event.target.country.value;
    console.log("countryValue: ", countryValue);

    // Validate the email is a valid email
    // Email has an @ character
    let errors = false;
    const visitPurposeErrorEl = document.getElementById("error-message-visit-purpose");
    const emailErrorEl = document.getElementById("error-message-email");
    const agreeToFunErrorEl = document.getElementById("error-message-agree-to-fun");

    // Option 1: access each character in emailValue, check if one of the characters is an @ character
    // Option 2: Regex: Regular Expression -> Give a pattern to match, and returns true/false
    // Option 3: .includes() string method
    // Diving deeper:  has characters after the .
    if (
        emailValue && emailValue.lastIndexOf("@") < emailValue.lastIndexOf(".")
    ) {
        emailErrorEl.classList.add("error-message--hide");
    } else {
        errors = true;
        event.target.email.focus();
        emailErrorEl.classList.remove("error-message--hide");
    }

    if (agreeToFunChecked) {
        agreeToFunErrorEl.classList.add("error-message--hide");
    } else {
        errors = true;
        agreeToFunErrorEl.classList.remove("error-message--hide");
    }

    if (visitPurposeValue) {
        visitPurposeErrorEl.classList.add("error-message--hide"); 
    } else {
        errors = true;
        visitPurposeErrorEl.classList.remove("error-message--hide");
    }

    if (!errors) {
        emailErrorEl.classList.add("error-message--hide");
        agreeToFunErrorEl.classList.add("error-message--hide");
        visitPurposeErrorEl.classList.add("error-message--hide");

        addPlayDate(nameValue, emailValue, visitPurposeValue);
    }
})

function addPlayDate(name, email, visitPurpose) {
    const playDateListEl = document.querySelector(".play-date-list");
    
    const playDateEl = document.createElement("li");
    playDateEl.innerText = "Name: " + name + ". Email: " + email + ". Visit Purpose: " + visitPurpose;
    
    playDateListEl.appendChild(playDateEl);
}