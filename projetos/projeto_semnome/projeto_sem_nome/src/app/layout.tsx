import "./globals.css";
import Header from "./ui/components/header";
import Footer from "./ui/components/footer";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
