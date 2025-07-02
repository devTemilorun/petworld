import './Card.css'
const Card = ({
    title,
    description,
    imageUrl
}) => {
  return (
    <div className="card">
        <img src={imageUrl} alt="" />
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card
