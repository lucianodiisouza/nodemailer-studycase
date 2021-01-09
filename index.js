const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "Hotmail", // caso nao seja hotmail vc precisa passar a smtp
    auth: {
        user: 'meu@email.com',
        pass: 'senha12345'
    }
});

transporter.sendMail({
    from: 'Não responda <meu@email.com>', // tem que ser o mesmo endereço lá do Auth
    to: 'email@destinatario.com',
    subject: 'Envio de emails com nodemailer',
    text: 'Testando envio de emails com nodejs e nodemailer',
    html: 'Olá meu nome é Luciano, e eu acho o <a href="https://www.google.com">nodemailer</a> muito legal'
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err)
})