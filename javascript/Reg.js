var btnSubmit = document.forms['reg-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if kiemtra(){
        alert('Thành công!');
    }
}
function kiemtra() {
    var kiemtra = true;
    var kiemtraten = true;
    var kiemtraemail = true;
    var kiemtraphone = true;
    var hovaten = document.forms['reg-form']['hovaten'];
    var tbhovaten = hovaten.nextElementSibling;
    if (hovaten.value == null || hovaten.value.length == 0) {
        tbhovaten.classList.remove('msg-success');
        tbhovaten.classList.add('msg-error-01');
        tbhovaten.innerHTML = 'Hãy nhập họ và tên!';
        kiemtraten = false;
    } else {
        tbhovaten.classList.remove('msg-error-01');
        tbhovaten.classList.add('msg-success');
        tbhovaten.innerHTML = 'Ok!';
    }
    if (hovaten.value != null || hovaten.value.length >50) {
        tbhovaten.classList.remove('msg-success');
        tbhovaten.classList.add('msg-error-02');
        tbhovaten.innerHTML = 'Tối đa 50 kí tự! Xin nhập lại';
        kiemtraten = false;
    } else {
        tbhovaten.classList.remove('msg-error-02');
        tbhovaten.classList.add('msg-success');
        tbhovaten.innerHTML = 'Ok!';
    }

    var email = document.forms['reg-form']['email'];
    var tbemail = email.nextElementSibling;
    if (email.value == null || email.value.length == 0) {
        tbemail.classList.remove('msg-success');
        tbemail.classList.add('msg-error-01');
        tbemail.innerHTML = 'Hãy nhập email!';
        isValidLastName = false;
    } else {
        tbemail.classList.remove('msg-error-01');
        tbemail.classList.add('msg-success');
        tbemail.innerHTML = 'Ok!';
    }

    var phone = document.forms['reg-form']['phone'];
    var tbphone = phonera.nextElementSibling;
    if (phone.value == null || phone.value.length == 0) {
        tbphone.classList.remove('msg-success');
        tbphone.classList.add('msg-error-01');
        tbphone.innerHTML = 'Hãy nhập số điện thoại!';
        isValidPassword = false;
    } else {
        tbphone.classList.remove('msg-error-01');
        tbphone.classList.add('msg-success');
        tbphone.innerHTML = 'Ok!';
    }
    kiemtra = kiemtraten && kiemtraemail && kiemtraphone;
    return isValid;
}