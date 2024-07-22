const SubmitBtn = document.querySelector('.submit');
const passwordlist = document.querySelectorAll('.drop-item ul>li')
const passwordfield = document.querySelector('#passwordField');
const inputfielvalue = document.querySelector('#userNameField')
const passwordtoggleBtn = document.querySelector('.passwordicon');
const form = document.querySelector('form')
passwordlist.forEach((list) => {
    list.addEventListener('click', (li) => generatepassword(li))
})

passwordtoggleBtn.addEventListener('click', () => {
    let classes = passwordtoggleBtn.classList.contains("fa-eye-slash");
    if (classes) {
        passwordtoggleBtn.classList.add('fa-eye')
        passwordtoggleBtn.classList.remove('fa-eye-slash')
        passwordfield.type = "text"
    } else {
        passwordtoggleBtn.classList.remove('fa-eye')
        passwordtoggleBtn.classList.add('fa-eye-slash')
        passwordfield.type = "password"
    }
})

function generatepassword(li) {
    const listvalue = li.target.innerHTML;
    passwordlist.forEach((listitem) => {
        if (listitem.innerHTML == listvalue) {

            let password = Createstrongpass()
            passwordfield.value = password;
            return;
        }
    })
}
SubmitBtn.addEventListener('click', (e) => welcomeMessage(e))

const welcomeMessage = (e) => {
    e.preventDefault();
    const welcomeMessage = document.querySelector('.welcomemessage');
    let inputtext = inputfielvalue.value.trim();
    welcomeMessage.innerHTML = `Hey ${inputtext}`;

}
function Createstrongpass() {
    let valueforpasscode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let max = valueforpasscode.length;
    let newcode = ""
    for (index = 0; index <= 12; index++) {
        let randomvalue = Math.floor(Math.random() * max);
        newcode += valueforpasscode[randomvalue]
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+\-=<>?])(.*)$/;
    if (regex.test(newcode)) return newcode;
    return Createstrongpass();
}
