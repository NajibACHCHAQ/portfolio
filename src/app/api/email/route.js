import { NextResponse } from 'next/server';
import sendEmail from '/utils/sendEmail.js';

export async function POST(request) {
    try {
        const { email } = await request.json();        
        console.log('Tentative d\'envoi de courriel à :', email);
        await sendEmail(email); // Passer l'email comme argument
        console.log('E-mail envoyé avec succès à :', email);
        // Réponse à la requête avec succès
        return NextResponse.json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        return NextResponse.error();
    }
}
