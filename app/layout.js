import './globals.css';
import Providers from '../providers/Providers';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { options } from './api/auth/[...nextauth]/oprions';
import { getServerSession } from 'next-auth';
export const metadata = {
  title: 'The Work Bazar',
  description: 'The Work Bazar - A place to find your next job',
  keywords: 'The Work Bazar, Jobs, Job Search, Job Portal, Job Listing',
  image: '/logo.svg',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(options);

  return (
    <html data-theme="light" lang="en">
      <body className="font-mono">
        <Providers>
          <HeaderComponent session={session?.user} />
          <div className="min-h-[70vh]">{children}</div>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
