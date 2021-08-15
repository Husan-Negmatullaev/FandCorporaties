const form = document.getElementById('form')

const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const numbed = document.querySelector('#numbed')
const precontact = document.querySelector('#precontact')

function sendMail(){
    if (form.checkValidity()) {
        let tempParams = {
            from_name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value,
            numbedroom: numbed.value,
            preftime: precontact.value
        }
        
        emailjs.send("service_mf37vbn", "template_ipr0sqb", tempParams)
        .then((res) => {
            if (res.status === 200) {
                alert('Sent form success')
            } else {
                alert('Went wrong')
            }
            name.value = ''
            surname.value = ''
            email.value = ''
            phone.value = ''
            numbed.value = ''
            precontact.value = ''
        })
    }
    else {
        form.reportValidity()
    }
}