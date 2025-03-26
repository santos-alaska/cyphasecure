import ContactSection from "./ContactSection"
import Faq from "./Faq"
import Hero from "./Hero"
import HeroBanner from "./HeroBanner"
import WhyChooseUs from "./WhyChooseUs"
import OurServices from "./OurServices"
import WhoAreWe from "./WhoAreWe"
import Footer from "./Footer"
import TestimonialSection from "./TestimonialSection"
import Navbar from "./Navbar"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HeroBanner />
            <WhoAreWe />
            <OurServices />
            <WhyChooseUs />
            <Faq />
            <TestimonialSection />
            <ContactSection />

        </div>
    )
}

export default HomePage