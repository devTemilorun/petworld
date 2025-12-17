import './Card.css'
const Card = ({
    title,
    description,
    imageUrl,
    dataAos,
}) => {
  return (
    <div 
      data-aos={dataAos}
      data-aos-duration="1000"
      data-aos-easing="linear"
      className="card"
    >
        <img src={imageUrl} alt="" />
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card
