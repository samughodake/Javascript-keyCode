// script file to show key code
let key_code = null;
let code = null;
let key = null;
window.addEventListener('keydown', function (e) {
    key_code = e.keyCode;
    code = e.code;
    key = e.key;
    console.log(key_code, code, key)
    const div = this.document.querySelector('.container');
    div.innerHTML = key_code;
    div.classList.add("big-key");
    this.document.querySelector('#code').innerHTML = "code: " + code + "<br>";
    this.document.querySelector('#code').classList.add("span-css")
    this.document.querySelector('#key').innerHTML = "key: " + key;
    this.document.querySelector('#key').classList.add("span-css")
})