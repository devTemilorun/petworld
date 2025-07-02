import './Video.css'

const Video = () => {
  return (
    <section className='Video-section'>
      <video className='centered-video' controls>
        <source 
          src="https://cdn.animaapp.com/projects/60d876f00b85a9c710f9b3a3/files/pexels-yaroslav-shuraev-9632184.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default Video
