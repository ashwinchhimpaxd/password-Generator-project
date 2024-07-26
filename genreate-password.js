const SubmitBtn = document.querySelector('.submit');
const passwordlist = document.querySelector('.drop-item ul > li')
const passwordfield = document.querySelector('#passwordField');
const inputfielvalue = document.querySelector('#userNameField')
const passWordEyetoggle = document.querySelector('.passwordicon');
const form = document.querySelector('#form')

passwordlist.addEventListener('click', () => Createstrongpass())
SubmitBtn.addEventListener('click', (e) => welcomeMessage(e))
passWordEyetoggle.addEventListener('click', () => {
    let classes = passWordEyetoggle.classList.contains("fa-eye-slash");
    if (classes) {
        passWordEyetoggle.classList.add('fa-eye')
        passWordEyetoggle.classList.remove('fa-eye-slash')
        passwordfield.type = "text"
    } else {
        passWordEyetoggle.classList.remove('fa-eye')
        passWordEyetoggle.classList.add('fa-eye-slash')
        passwordfield.type = "password"
    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    welcomeMessage(e)
})

const welcomeMessage = (e) => {
    e.preventDefault();
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+\-=<>?])(.*)$/;
    const welcomeMessage = document.querySelector('.welcomemessage');
    let inputtext = inputfielvalue.value.trim();
    let passwordvalue = passwordfield.value.trim();
    if (inputtext == "" || passwordvalue == "") {
        return;
    } else if (regex.test(passwordvalue)) {

        welcomeMessage.innerHTML = `Hey ${inputtext}`;
        inputfielvalue.value = "";
        passwordfield.value = "";
    } else {
        alert('Atleast one Upper and lower character and one deigit and special character must')
    }
}
function Createstrongpass() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+\-=<>?])(.*)$/;
    let valueforpasscode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let max = valueforpasscode.length;
    let newcode = ""
    for (index = 0; index <= 12; index++) {
        let randomvalue = Math.floor(Math.random() * max);
        newcode += valueforpasscode[randomvalue]
    }
    if (regex.test(newcode)) passwordfield.value = newcode;
    else return Createstrongpass();
}
