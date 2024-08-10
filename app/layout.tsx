import './globals.css'

export const metadata = {
  title: 'Foodies',
  description: 'Recipe app!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
