import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Automation of Artistry: The Applications and Ethical Implications of Generative AI in Music",
  description: "An interactive essay exploring the applications and ethics of generative AI in music",
  authors: [{ name: "Alex Manning" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
