import { About, CoreCompetencies, Excellence, Mision, OngoingProject, Structures, Vision } from '@/section';

const Home = () => {
  return (
    <div>
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
