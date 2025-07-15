// src/app/layout.tsx
import '../styles/globals.scss';
import CTA from "@/components/CTA";
import { PHONE } from "@/components/icons";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        {/* <CTA type="blue" icon={PHONE}>Appeler maintenant</CTA> */}
        <footer>© 2025</footer>
      </body>
    </html>
  );
}
