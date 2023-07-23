import '@/styles/globals.css';
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';

export const metadata = {
  title: 'FridgeFriend',
  description:
    'FridgeFriend connects communities across the U.S., making it easy to find, contribute to, and benefit from local community fridges and pantries.',
  themeColor: '#0B704E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col h-full min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
