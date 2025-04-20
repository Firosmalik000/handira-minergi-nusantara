import { About, CoreCompetencies, Excellence, Hero, Mision, OngoingProject, Structures, Vision } from '@/section';
import Company from '@/section/Company';

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
    </div>
  );
};

export default Home;
