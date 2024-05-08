"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Typed from 'typed.js';
import axios from 'axios'; // Importez axios pour effectuer la demande POST

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Récupérez les valeurs du formulaire
    const email = form.current.user_email.value;
    const userMessage = form.current.user_message.value;
    try {
      // Effectuez une demande POST avec les données du formulaire
      await axios.post('/api/email', { email, message: userMessage });
      // Affichez un message de succès si la demande est réussie
      setMessage('Un e-mail a été envoyé à Najib');
      setSuccess(true);
      setError(false);
    } catch (error) {
      // Affichez un message d'erreur si la demande échoue
      console.error('Erreur', error);
      setMessage("Une erreur s'est produite lors de l'envoi du message.");
      setError(true);
      setSuccess(false);
    }
  };

  useEffect(() => {
    // Code à exécuter après le rendu du composant
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 70,
      showCursor: false,
      backSpeed: 35,
      loop: true,
    });

    // Nettoyez le Typed instance lors du démontage du composant pour éviter les fuites de mémoire
    return () => {
      typed.destroy();
    };
  }, []);

  const form = useRef();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-full w-full lg:h-full lg:w-1/2 flex flex-col items-center  text-6xl justify-around">
          <div className="text-[70px] float-l">
            <div id="typed-strings">
              <p>Vous cherchez <strong>un développeur passionné</strong>.</p>
              <p>Vous cherchez <strong>une personne prête à relever tous les défis</strong>.</p>
              <p>Ne cherchez plus !</p>
              <p>Vous avez trouvé.</p>
            </div>
            <h2><span className="animation-entete" id="typed"></span></h2>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-5 bg-cover bg-center bg-[url('/10217033.jpg')]"
        >
          <h2 className="titre-form">Formulaire de contact</h2>
          <p className="h-[fit-content]">Laissez-moi un message, je vous recontacterai très prochainement !</p>
          <textarea
            rows={7}
            className="outline-none z-70"
            name="user_message"
            id="monInput"
            placeholder="Laissez votre message ici !"
          />
          <input
            name="user_email"
            type="email" // Changez le type en "email" pour une meilleure validation côté client
            className="outline-none"
            id="monInput"
            placeholder="Entrez votre adresse e-mail"
          />
          <span>A bientôt</span>
          <button className="w-[50%] mx-auto bg-green-200 rounded font-semibold text-gray-600 p-4 hover:bg-green-400">
            Envoyer
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Votre message a été envoyé avec succès !
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Une erreur s&apos;est produite lors de l&apos;envoi du message !
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
