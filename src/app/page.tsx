import { About, CoreCompetencies, Excellence, Hero, Mision, OngoingProject, Structures, Vision } from '@/section';

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
      <Structures />
    </div>
  );
};

export default Home;
