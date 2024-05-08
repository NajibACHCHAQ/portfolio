import { Inter } from 'next/font/google';
import './globals.css'; // Assurez-vous que ce fichier contient la classe bg-gradient-animation
import TransitionProvider from '@/components/transitionProvider';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Najib Portfolio',
  description: 'Portfolio Développeur Web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* <style>{inter.styles}</style> */}
      </head>
      <body >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

