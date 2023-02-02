import './Hero.css'
import PrimaryButton from '../../components/Buttons/Buttons'
const Hero = () => {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">Welcome To Cyborg</h6>
            <h4 className="hero-title"><em>Browse</em> Our Popular Games Here.</h4>
            {/* <div className="main-button">
                <a href="browse.html">Browse Now</a>
            </div> */}
            <PrimaryButton>
              Browse Now
            </PrimaryButton>
        </div>
    </div>
  )
}

export default Hero