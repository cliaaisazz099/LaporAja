import './globals.css';

import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body suppressHydrationWarning className="bg-slate-50 text-slate-900">
        {children}

        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              borderRadius: '16px',
              padding: '16px',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}