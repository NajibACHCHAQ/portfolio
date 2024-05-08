import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'najib.achchaq@gmail.com',
    pass: process.env.PASS_EMAIL
  },
});

const sendEmail = (email) => { // Recevoir l'email comme argument
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'portfolio-najib@gmail.com',
      to: email, // Utiliser l'email reçu comme destinataire
      subject: 'Réinitialisation de mot de passe',
      text: `Un nouveau message de contact `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export default sendEmail; // Exporter la fonction sendEmail
