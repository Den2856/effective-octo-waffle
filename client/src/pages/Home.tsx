import Header from "../components/Header"
import CaseStudiesStrip from "../components/sections/Cases"
import Hero from "../components/sections/Hero"
import LogoBlock from "../components/sections/LogoBlock"
import Services from "../components/sections/Services"
import TeamGrid from "../components/sections/Team"
import StepsAccordion from "../components/sections/Acardion"
import SectionTitle from "../components/ui/SectionTitle"
import Footer from "../components/sections/Footer"

export default function Home() {


  return (
    <>
      <Header />

      <Hero />

      <LogoBlock />

      <SectionTitle
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <Services />

      <SectionTitle
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <CaseStudiesStrip
        backgroundClass="bg-[#191A23]"
        rounded="rounded-3xl"
      />

      <SectionTitle
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <StepsAccordion />

      <SectionTitle
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <TeamGrid />

      <Footer
        brand="Positivus"
        logoSrc="/logo-footer.png"
        logoAlt="Positivus logo"
      />

    </>
  )
}
