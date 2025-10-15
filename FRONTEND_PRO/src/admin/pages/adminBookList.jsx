import { useSelector, useDispatch } from "react-redux";
import {fetchAllBooks} from '../../features/book/bookAPI'
import {useEffect} from 'react'
const AdminBookListPage=()=>{
    const Books=useSelector((state)=>state.books.bookItems)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllBooks());
    }, [dispatch]);
    console.log(Books);
    return (
      <>
        <ul>
          {Books.map((book, index) => (
            <li key={book._id}>
              <h1>{book.title}</h1>
            </li>
          ))}
        </ul>
      </>
    );
}
export default AdminBookListPage;