import Header from './_components/Header';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const MarkteingPageLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
   );
}
 
export default MarkteingPageLayout;