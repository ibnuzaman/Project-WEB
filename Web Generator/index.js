let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

const generatePassword = (len) => {      // arrow function
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const upperALphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeric = "0123456789"
    const symbol  = "!@#$%^&*()_+=-{}[]:;,<.>/?~`"
    
    const data = lowerAlphabet + upperALphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    
  }

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent (`YOUR PASSWORD : ${document.title}`))
    saveButton.setAttribute('download','MyPasswordGeneratedLOG.txt')
    setTimeout(() => {
        alert('Berhasil disimpan')
    },3000)
   

}