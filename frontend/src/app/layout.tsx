import type { Metadata } from "next";
import '../styles/globals.css';
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Orange"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
