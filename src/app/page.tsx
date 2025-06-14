import Footer from '@/components/Footer';
import { About, Company, CoreCompetencies, Excellence, Galery, Hero, Mision, OngoingProject, Partner, Structures, Values, Vision } from '@/section';
import Map from '@/section/Map';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Values />
      <OngoingProject />
      <CoreCompetencies />
      <Vision />
      <Mision />
      <Excellence />
      <Company />
      <Structures />
      <Galery />
      <Partner />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
