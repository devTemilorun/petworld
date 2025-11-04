import './Hero.css'

const Hero = () => {
  return (
    <section className='Hero'>
        <div className='Hero-text'>
            <h3>
                Pet Store <br />& Beyond
            </h3>
            <p>This is a simple landing page by Olawuni Israel Oluwatemilorun - a passionate web developer and frontend enthusiast turning ideas into websites </p>
        <button>get started</button>
        </div>
        <div className='Hero-img'>
            <img src="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/image-@1x.png" alt="" />
        </div>
    </section>
  )
}

export default Hero
