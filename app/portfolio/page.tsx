import HeroProjects from "@/components/heroProjects/HeroProjects";
import ImaginationHero from "@/components/imagination-hero/ImaginationHero";
import Portfolio from "@/components/portfolio/Portfolio";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio'
}

const ProjectsPage = () => {
  return (
    <>
      <HeroProjects />
      <Portfolio />
      <ImaginationHero />
    </>
  );
};

export default ProjectsPage;
