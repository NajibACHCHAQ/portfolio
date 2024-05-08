import { NextResponse } from 'next/server';
import sendEmail from '/utils/sendEmail.js';

export async function POST(request) {
    try {
        const { userEmail, userMessage } = await request.json(); // Extraire toutes les données du corps de la requête
        console.log('Tentative d\'envoi de courriel à : Najib');
        await sendEmail(userMessage, userEmail); // Passer le message et l'email comme arguments
        console.log('E-mail envoyé avec succès à : Najib');
        // Réponse à la requête avec succès
        return NextResponse.json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        return NextResponse.error();
    }
}
