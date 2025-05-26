import type { Metadata } from "next";
import "./globals.css";
import "./style.css";



export const metadata: Metadata = {
  title: "Shahriar Rahman Niloy",
  description: "A passionate developer with expertise in React, Node.js and flask with machine learning (ML) knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
