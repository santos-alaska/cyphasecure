import ContactSection from "./ContactSection"
import Faq from "./Faq"
import Hero from "./Hero"
import HeroBanner from "./HeroBanner"
import WhyChooseUs from "./WhyChooseUs"
import OurServices from "./OurServices"
import TeamCarousel from "./TeamCarousel"
import WhoAreWe from "./WhoAreWe"
import Footer from "./Footer"
import TestimonialSection from "./TestimonialSection"
import Navbar from "./Navbar"
import TeamCarouselMobile from "./TeamCarouselMobile"

const HomePage = () => {
    return (
        <div>
            <Navbar />

            <Hero />
            <HeroBanner />
            <WhoAreWe />
            <OurServices />
            <WhyChooseUs />
            <TeamCarousel />
            <TeamCarouselMobile />
            <Faq />
            <TestimonialSection />
            <ContactSection />

        </div>
    )
}

export default HomePage