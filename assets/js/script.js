function GetData(){
    let nama = document.getElementById('nama').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let keterangan = document.getElementById('information').value

    const defaultEmail = "Prastyohadi188@gmail.com"

    let mailTo = document.createElement('a')
    if(nama == "" || email == "" || subject =="" || phone == "" || information=="") {
        alert("ada yang belum terisi !!"); document.getElementById('nama').focus();
    } else {     mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${nama}, saya ingin ${keterangan} tolong hubungin saya ${phone}`
    mailTo.click() }
}