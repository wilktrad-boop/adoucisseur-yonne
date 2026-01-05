import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation basique
    if (!body.nom || !body.email || !body.telephone || !body.ville || !body.besoin) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    const formspreeFormId = process.env.FORMSPREE_FORM_ID;
    if (!formspreeFormId) {
      console.error("FORMSPREE_FORM_ID n'est pas défini dans l'environnement.");
      return NextResponse.json(
        { error: "Le service de contact n'est pas configuré." },
        { status: 500 }
      );
    }

    const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nom: body.nom,
        email: body.email,
        telephone: body.telephone,
        codePostal: body.codePostal,
        ville: body.ville,
        besoin: body.besoin,
        message: body.message,
        source: "adoucisseur-yonne.fr",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!formspreeResponse.ok) {
      const errorBody = await formspreeResponse.json().catch(() => null);
      console.error("Erreur Formspree:", errorBody || formspreeResponse.statusText);
      return NextResponse.json(
        {
          error:
            errorBody?.errors?.[0]?.message ||
            "Impossible d'envoyer votre demande pour le moment.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: "Votre demande a été envoyée avec succès. Nous vous contacterons sous peu." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre demande" },
      { status: 500 }
    );
  }
}






