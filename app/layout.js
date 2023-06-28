import './globals.css';
import Providers from './providers/Providers';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const metadata = {
  title: 'The Work Bazar',
  description: 'The Work Bazar - A place to find your next job',
  keywords: 'The Work Bazar, Jobs, Job Search, Job Portal, Job Listing',
  image: '/logo.svg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Providers>
          <HeaderComponent />

          <div className="min-h-[70vh]">{children}</div>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
