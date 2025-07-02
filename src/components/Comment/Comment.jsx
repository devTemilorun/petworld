import './Comment.css'

const Comment = () => {
  return (
   <section className="Comment">
        <div className="comment-right">
            <img src="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/image-3@2x.png" alt="" />
        </div>
        <div className="comment-left">
            <img src="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/quote-icon-1@2x.png" alt="" />
            <p className='comment-left-info'>We love using 'PETWORLD' products.  Environmentally friendly and sustainable.We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.</p>
            <p className='comment-left-author'>Dylan Shaw</p>
        </div>
   </section>
  )
}

export default Comment
