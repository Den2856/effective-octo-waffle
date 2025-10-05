import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1440px] flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-center lg:items-start justify-between">
      <div className="max-w-lg space-y-6 lg:space-y-8">
        <h1 className="text-4xl lg:text-6xl font-semibold text-dark text-center lg:text-left">
          Navigating the <br /> digital landscape <br /> for success
        </h1>
        <p className="text-lg text-dark text-center lg:text-left">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <div className="text-center lg:text-left">
          <Link to="/consultations" className="bg-dark px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-primary hover:text-dark transition duration-300">
            Book a consultation
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center lg:w-1/2">
        <img src="/hero.png" alt="Digital Marketing" className="w-full max-w-lg h-auto" />
      </div>
    </section>
  )
}

export default Hero
