// src/app/layout.tsx
import '../styles/globals.scss';
import CTA from "@/components/CTA";
import { PHONE } from "@/components/icons";
import Footer from '@/components/Footer';


export const metadata = {
  title: 'LMNP Conseils | Votre achat locatif en LMNP, clés en mains et sécurisé.',
  description: `LMNP Conseils vous accompagne dans votre projet d'investissement en location meublée non professionnelle (LMNP). Stratégie patrimoniale, financière et fiscale. Sélection du bien en fonction de votre projet. Investissement clés en main avec loyers garantis.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
        {/* <CTA type="blue" icon={PHONE}>Appeler maintenant</CTA> */}
        {/* <footer>© 2025</footer> */}
        <Footer />
      </body>
    </html>
  );
}
