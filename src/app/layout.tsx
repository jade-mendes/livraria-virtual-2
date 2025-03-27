import Header from "./components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <Header/>
        <main>
          {children}
        </main>
      </ body>
    </html>
  );
}
