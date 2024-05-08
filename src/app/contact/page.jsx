"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Typed from 'typed.js';





const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/mot-de-passe-oublie', { email });
      setMessage('Un e-mail de réinitialisation a été envoyé à votre adresse e-mail.');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe :', error);
      setMessage("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
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
            <p>Vous cherchez <strong>une personne prete a relever tous les défis</strong>.</p>
            <p>Ne cherchez plus !</p>
            <p>Vous avez trouvé.</p>

          </div>
          <h2><span className="animation-entete" id="typed"></span></h2>
        </div>
        
          {/* <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div> */}

        </div>
        {/* FORM CONTAINER */}
        <form
          // onSubmit={}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-5 bg-cover bg-center bg-[url('/10217033.jpg')]"
        >
          <h2 className="titre-form">Formulaire de contact</h2>
          <p className="h-[fit-content]">Laissez moi un message je vous recontacterais très prochainement !</p>
          <textarea
            rows={7}
            
            className=" outline-none z-70 "
            name="user_message"
            id="monInput"
            placeholder="Laissez votre méssage ici ! "
          />
          <input
            name="user_email"
            type="text"
            className=" outline-none"
            id="monInput"
            placeholder="Entrez votre adresse mail "

          />
          <span>A bientot</span>
          <button className="w-[50%] mx-auto bg-green-200 rounded font-semibold text-gray-600 p-4 hover:bg-green-400">
            Envoyé
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Votre message a été envoyé avec succès !
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Une erreur s'est produite !
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
