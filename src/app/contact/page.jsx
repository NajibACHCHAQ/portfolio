"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Typed from 'typed.js';
import axios from 'axios';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = formRef.current.user_email.value;
    const userMessage = formRef.current.user_message.value;
    try {
      await axios.post('/api/email', { userEmail, userMessage });
      setMessage('Un e-mail a été envoyé à Najib');
      setSuccess(true);
      setError(false);
      formRef.current.reset();
    } catch (error) {
      console.error('Erreur', error);
      setMessage("Une erreur s&apos;est produite lors de l&apos;envoi du message.");
      setError(true);
      setSuccess(false);
    }
  };

  useEffect(() => {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 60,
      showCursor: false,
      backSpeed: 25,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-full w-full mb-15  mr-10 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="lg:text-[70px] w-fit mx-auto float-l sm:text-[40px] md:text-[25px] ">
          <div id="typed-strings">
          <p>Je suis là pour <div className="p-2 rounded-xl w-fit font-bold bg-yellow-400 text-blue-700">Vous aider</div> à réaliser <div className="p-2 rounded-xl w-fit font-bold bg-blue-700 text-bold text-yellow-400">Vos projets !</div> </p>
          <p><div className=" p-2 rounded-xl w-fit font-bold bg-yellow-400 text-blue-700">N&apos;hésitez pas !</div> Contacter moi pour discuter de  <div className="p-2 rounded-xl w-fit font-bold bg-blue-700 text-bold text-yellow-400">Vos Idées !</div> </p>
          <p><div className=" p-2 rounded-xl w-fit font-bold bg-yellow-400 text-blue-700">Ensemble !</div>Nous pouvons <div className="p-2 rounded-xl w-fit font-bold bg-blue-700 text-yellow-400">Créer</div> quelque chose de <div className="p-2 rounded-xl w-fit font-bold bg-yellow-400 text-blue-700">Génial !</div></p>
        </div>
            <h2><span className="animation-entete" id="typed"></span></h2>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form onSubmit={handleSubmit} ref={formRef} className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-5 bg-cover bg-center bg-[url('/10217033.jpg')]">
          <h2 className="titre-form">Formulaire de contact</h2>
          <p className="h-[fit-content]">Laissez-moi un message, je vous recontacterai très prochainement !</p>
          <textarea id="monInput" rows={7} className="outline-none z-70" name="user_message" placeholder="Laissez votre message ici !" required />
          <input id="monInput" name="user_email" type="email" className="outline-none" placeholder="Entrez votre adresse e-mail" required />
          <span>A bientôt</span>
          <button className="w-[50%] mx-auto bg-green-200 rounded font-semibold text-gray-600 p-4 hover:bg-green-400">Envoyer</button>
          {success && <span className="text-green-600 font-semibold mx-auto">Votre message a été envoyé avec succès !</span>}
          {error && <span className="text-red-600 font-semibold">Une erreur s&apos;est produite lors de l&apos;envoi du message !</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
