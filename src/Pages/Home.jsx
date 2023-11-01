
import Intro from '../components/Intro';
import Tranding from '../components/Tranding';
import SuperHero from '../components/SuperHero';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import "../style/landingPage.css"


const Home = () => {

    return(
        <div>
          <div>
          <div className="myBG" >
            <NavigationBar />
            <Intro />
          </div>  
          <div className="tranding">
            <Tranding />
          </div>
          <div className="superhero">
            <SuperHero />
          </div>
          <div className="footer">
            <Footer />
          </div>
          </div>
        </div >
    )
}

export default Home