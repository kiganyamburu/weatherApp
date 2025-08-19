import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-bg">
          <header className="app-header">
            <h1>WeatherApp</h1>
          </header>
          <main className="app-main-centered">
            <div className="app-card app-card-animate">{children}</div>
          </main>
          <footer className="app-footer-fixed">
            &copy; {new Date().getFullYear()} WeatherApp. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
