
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Growth from "./Growth";
import NavBar from "./NavBar";
import Service from "./Service";
import Slider from "./Slider";



function HomePage() {
    return (
        <div>
            <NavBar />

            <Slider />

            <Service />

            <div className="container">
                <hr/>
            </div>
            
            <Growth />

            <Contact />

            <FAQ />

            <Footer />
            

        </div>

    )
}

export default HomePage;