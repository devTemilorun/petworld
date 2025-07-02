import Card from "../../Card/Card"
import './OurOffers.css'

const OurOffers = () => {
  return (
    <div className="card-grid">
      <Card title="Best quality pet food" description="Super delicious food. Available in a range of delicious flavors." imageUrl="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/illustration-4@2x.png"/>
      <Card title="Toys & Accessories" description="Soft toys, chew toys, and rope toys. Strong, interactive, and fun." imageUrl="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/illustration-5@2x.png"/>
      <Card title="Pets medical care" description="You can get a wide range of great treatments for your dog." imageUrl="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/illustration-6@2x.png"/>
      <Card title="Full service grooming" description="It's the right time to groom your dog with a variety of treatments." imageUrl="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/illustration-7@2x.png"/>
    </div>
  )
}

export default OurOffers
