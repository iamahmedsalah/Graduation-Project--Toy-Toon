
// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.Preloader');
    loader.classList.add('Preloader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.classList.remove('Preloader')
    })
})

// Contact Us
const contactForm = document.querySelector('.custom-form ');
console.log(contactForm)
let contactName = document.getElementById('contact-name');
let contactEmail = document.getElementById('contact-email');
let contactCompany = document.getElementById('contact-company');
let contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', (err) => {

    err.preventDefault();
    let formData = {
        contactName: contactName.value,
        contactEmail: contactEmail.value,
        contactCompany: contactCompany.value,
        contactMessage: contactMessage.value
    }
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {

            document.getElementById('success-alert').classList.remove('hide')
            // alert(' Email Sent');
            contactName.value = '';
            contactEmail.value = '';
            contactCompany.value = '';
            contactMessage.value = '';
        } else {
            alert(' Something went wrong !!');
        }
    }
    xhr.send(JSON.stringify(formData));
})

