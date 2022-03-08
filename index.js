const emailReceiver = 'test@gmail.com'

function submitForm() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let number = document.getElementById('input-number').value
    let subject = document.getElementById('select-subject').value
    let message = document.getElementById('input-message').value

    if(name == '') {
        alert('Nama anda harus diisi')
    }
    if(email == ''){
        alert('Email anda harus diisi')
    }
    if(number == ''){
        alert('Nomor handphone anda harus diisi')
    }
    if(subject == ''){
        alert('Subject anda harus diisi')
    }
    if(message == ''){
        alert('Pesan anda harus diisi')
    }
// pengecekan 
    console.log(name)
    console.log(email)
    console.log(number)
    console.log(subject)
    console.log(message)

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&from=${email}&body=Hello my name ${name}, ${message}`
    a.click()

    
    // contoh object
    // let dataObject = { name: 'Apriadi', email, number, subject, message }

    // console.log(dataObject)
}

