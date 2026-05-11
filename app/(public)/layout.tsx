import "../globals.css";
import { Toaster } from "sonner";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              borderRadius: "16px",
              padding: "16px",
              fontSize: "14px",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}