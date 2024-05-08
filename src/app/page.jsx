"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import  { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/portfolio');
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gradient-animation h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/app.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Entrez dans mon Univers !
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Explorez mon portfolio pour découvrir le monde du développement web à travers mes yeux. 
          Des projets passionnants, des solutions ingénieuses et une passion sans fin pour l&apos;innovation vous attendent. 
          Bienvenue dans mon univers numérique, où chaque ligne de code est une histoire en devenir.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button onClick={handleButtonClick} className="p-4 rounded-lg ring-1 ring-blue-500 bg-blue-500 text-yellow-300 hover:ring-yellow-300 hover:bg-yellow-300 hover:text-blue-500 ease-in duration-300 font-bold">
              Voir mes réalisations
            </button>
            
            <button className="p-4 rounded-lg ring-1 text-blue-500 ring-blue-500  hover:text-blue-700 hover:ring-blue-700 ">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

