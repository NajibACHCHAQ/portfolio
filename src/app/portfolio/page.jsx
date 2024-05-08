"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import '../globals.css'; 

const items = [
  {
    id: 1,
    color: "from-[#3885cc]  to-blue-300",
    title: "Quiz Web App",
    desc: "Ce projet a pour but de présenter le nouveau dispositif de formation d'un centre de formation GRETA et de permettre au candidant de passer les test d'évaluation en ligne sans avoir besoin de créer un compte",
    img: "/accueil.png",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Management Quiz Desktop App",
    desc: "Ce projet a pour but de permettre au administrateur de la formation de gérer les questions du quiz ainsi que de consulter et gerer les candidatures ainsi que d'exporter les données au format csv pour un traitement ullérieur",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative bottom-0" ref={ref}>
        
        <ul class="background">
        <div className="text-white font1 font-semibold w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <a className="rotate" href="http://www.thismanslife.co.uk" target="_blank">Mes Réalisations</a>
        </div>
        </ul>
         

        <div className="sticky  w-screen top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex ">
            <div className="h-screen  w-screen flex flex-col  items-center justify-center  " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen  bottom-0 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="w-screen h-[75%] items-center justify-between flex flex-col text-white">
                  <h1 className="portfolio-title font1   mx-auto w-[fit-content] text1  text-m font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="flex w-[90%] justify-center mx-auto mb-30 ">
                    <div className="mx-auto mt-30 img-container relative  w-screen h-76 md:w-96 md:h-64 ">
                      <Image src={item.img} alt=""  fill  />
                    </div>
                    <div className="mx-auto mt-30 img-container relative  w-screen h-76 md:w-96 md:h-64 ">
                      <Image src={item.img} alt=""  fill />
                    </div>
                    <div className="mx-auto mt-30 img-container relative  w-screen h-76 md:w-96 md:h-64 ">
                      <Image src={item.img} alt=""  fill className="rounded" />
                    </div>
                  </div>               
                  <div className="mx-auto flex flex-row w-[fit-content] items-center ">
                    <p className=" w-[fit-content] md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="px-4 py-2 mt-5 rounded-full h-[100%] w-[100%] bg-white text-gray-600 font-semibold m-4 ">Voir</button>
                  </Link>
                  </div>                 
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-gradient-animation w-screen h-[130%] relative bottom-0 mb-0 pb-0 flex flex-col  items-center justify-center text-center">
        {/* <h1 className="mt-10 text-m font-bold md:text-4xl lg:text-6xl xl:text-8xl">Vous avez un Projet?</h1> */}
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-120 h-120 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Vous avez un Projet ? ..  N'ésitez Pas ! ..
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="cursor p-4 w-60 h-60 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contactez Moi
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
