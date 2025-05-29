import HeroSection from '../components/home/HeroSection';
import SkillsOverview from '../components/home/SkillsOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsOverview />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
};

export default Home;