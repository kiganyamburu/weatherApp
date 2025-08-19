import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <header className="app-header">
            <h1>WeatherApp</h1>
            <nav>{/* Add navigation links here if needed */}</nav>
          </header>
          <main className="app-main">{children}</main>
          <footer className="app-footer">
            &copy; {new Date().getFullYear()} WeatherApp. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
