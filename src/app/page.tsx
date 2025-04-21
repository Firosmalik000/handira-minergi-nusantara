import Footer from '@/components/Footer';
import { About, Company, CoreCompetencies, Excellence, Hero, Mision, OngoingProject, Structures, Vision } from '@/section';
import Map from '@/section/Map';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OngoingProject />
      <CoreCompetencies />
      <Vision />
      <Mision />
      <Excellence />
      <Company />
      <Structures />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
