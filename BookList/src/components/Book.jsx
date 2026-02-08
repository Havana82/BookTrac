
import "../styles/book.css"
function Book({image, name, author}) {
  return (
    <div className="book">
        <img src={image} alt={name} className="photo"/>

        <div>
            <div className="author">{author}</div>
        </div>
       
    </div>
  )
}
export default Book