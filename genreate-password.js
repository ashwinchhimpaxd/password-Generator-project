class PasswordClass {
    #password;
    Createstrongpass(code) {
        let valueforpasscode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
        let max = valueforpasscode.length;
        let newcode = ""
        for (let index = 0; index <= code; index++) {
            let randomvalue = Math.floor(Math.random() * max);
            newcode += valueforpasscode[randomvalue]
        }
        this.#password = newcode;
        return "password created successfully"
    }
    checkstrongCode() {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+\-=<>?])(.*)$/;
        if (regex.test(this.#password)) console.log("Strong Password created")
        else {
            this.Createstrongpass(10)
            this.checkstrongCode();
        }
    }
    showpassword() {
        return this.#password
    }
}
let user1 = new PasswordClass()
user1.Createstrongpass(10);
user1.checkstrongCode();
let mypassword = user1.showpassword();
console.log("my password ", mypassword)
// console.log(user1.#password)  // password is a private is not access directly outside the class but you can access using showpoassword FX 



