import AboutSection from "../sections/AboutSection";
import ContactUsSection from "../sections/ContactUsSection";
import MembersSection from "../sections/MembersSection";

export default function Home(){

    const backgroundColor = "#333337";

    return(
        <main style={{ backgroundColor }} className="relative flex flex-col w-full h-auto lg:pt-10 lg:pb-10 gap-20">

            {/* <Hero/> */}
        
            <AboutSection/>

            <MembersSection/>

            <ContactUsSection/>

        </main>
    );
    
}