import {bioData} from "../assets/biodata"
import Book from "./Book"
import "../styles/allbooks.css"
function AllBooks() {
  const allBooks = bioData.map((info)=>{
    return(
        <div className="listBook">

        <Book
            image={info.image}
            name={info.name}
            author={info.author}
            key={info.id}
            
            />
            </div>
    )
  })
  return (
    <div className="listBook">{allBooks}</div>
  )
}
export default AllBooks