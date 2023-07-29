import Categories from '../components/Categories';
import FeaturedServices from '../components/FeaturedServices';
import Partners from '../components/Partners';
import ProcessFlow from '../components/ProcessFlow';
import HeroSection from '../components/hero/HeroSection';

export default function Home() {



  return (
    <div className="">
      <HeroSection />
      <Partners />
      <ProcessFlow />
      <FeaturedServices />
      <Categories />
    </div>
  );
}
