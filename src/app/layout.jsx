// src/app/layout.tsx
import '../styles/globals.scss';
import CTA from "@/components/CTA";
import { PHONE } from "@/components/icons";
import Footer from '@/components/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';

export const metadata = {
  title: 'LMNP Conseils | Votre achat locatif en LMNP, clés en mains et sécurisé.',
  description: `LMNP Conseils vous accompagne dans votre projet d'investissement en location meublée non professionnelle (LMNP). Stratégie patrimoniale, financière et fiscale. Sélection du bien en fonction de votre projet. Investissement clés en main avec loyers garantis.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4R5XW79"
        height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript> */}
        <CookieConsentBanner />
        <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });`}
      </script>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P4R5XW79');`}</script>
        <main>{children}</main>

        {/* <CTA type="blue" icon={PHONE}>Appeler maintenant</CTA> */}
        {/* <footer>© 2025</footer> */}
        <Footer />
      </body>
    </html>
  );
}
