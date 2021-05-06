//Initiate Animation on Scroll
AOS.init({
        duration: 2000,
        offset: 0,
        });


//Sending Contact from to the specific Email
const sendEmail = (name, email, message)=>{
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'auto59817@gmail.com',
        Password: 'vadshxpvcwgjarvv',
        To: 'auto59817@gmail.com',
        From: 'auto59817@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name: ${name}<br/> Email: ${email}<br/> Message: ${message}`,
    }).then((message)=>alert("Your Message has been sent successful"))
}

//Contact Form Submit Form Handler
const submitForm = (e)=>{
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    document.querySelector('.contact-form').reset();

    sendEmail(name, email, message)
}
document.querySelector('.contact-form').addEventListener('submit', submitForm);