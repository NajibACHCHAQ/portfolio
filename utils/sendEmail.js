import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'najib.achchaq@gmail.com',
    pass: process.env.PASS_EMAIL
  },
});

const sendEmail = (message, userEmail) => { // Passer le message et l'email comme arguments
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'portfolio-najib@gmail.com',
      to: 'najib.achchaq@gmail.com',
      subject: 'Nouveau message de portfolio',
      text: `Message: ${message}\n\nEmail: ${userEmail}`, // Concaténer le message et l'email en une seule chaîne
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

