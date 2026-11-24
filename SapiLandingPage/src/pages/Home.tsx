import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactUsSection";

export default function Home(){

    const backgroundColor = "#333337";

    return(
        <main style={{ backgroundColor }} className="w-full h-auto lg:pt-10 lg:pb-10">

            {/* <Hero/> */}
        
            <AboutSection/>

            <ContactUsSection/>

        </main>
    );
    
}