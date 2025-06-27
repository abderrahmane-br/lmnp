// src/app/layout.tsx
import '../styles/globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer>© 2025</footer>
      </body>
    </html>
  );
}
