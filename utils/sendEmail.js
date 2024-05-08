import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'najib.achchaq@gmail.com',
    pass: process.env.PASS_EMAIL
  },
});

const sendEmail = (e) => {
  e.preventDefault();
  setError(false);
  setSuccess(false);

  const mailOptions = {
    from: 'portfolio-najib@gmail.com',
    to: 'najib.achchaq@getMaxListeners.com',
    subject: 'Réinitialisation de mot de passe',
    text: `Un nouveau message de contact `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      setError(true);
    } else {
      setSuccess(true);
      form.current.reset();
    }
  });
};
