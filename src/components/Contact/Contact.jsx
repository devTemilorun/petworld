import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
        <div className="contact-grid">
            <div className="contact-grid-left">
                <h3
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Let’s talk, <br /> woof!
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  You can ask us questions about your pet, and we will be happy to answer you!
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  Contact Us
                </button>
            </div>
            <div className="contact-grid-right">
                <img src="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/image-4@2x.png" alt="" />
            </div>
        </div>

    </section>
  )
}

export default Contact
