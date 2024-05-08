import sendEmail from '@/utils/sendEmail';

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = "najib.achchaq@gmail.com";        
        await sendEmail(email);
        // Réponse à la requête avec succès
        return NextResponse.json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur ', error);
        return NextResponse.error();
    }
}