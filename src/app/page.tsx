import { About, Company, CoreCompetencies, Excellence, Hero, Mision, OngoingProject, Structures, Vision } from '@/section';

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
