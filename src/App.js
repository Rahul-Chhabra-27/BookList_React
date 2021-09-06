import { Fragment, useEffect } from "react";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { sendBooksToDatabase, getDataFromDataBase } from "./store/BooksActions";

let initial = true;
function App() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromDataBase());
  },[dispatch])
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendBooksToDatabase(books));
  }, [books,dispatch]);

  return (
    <Fragment>
      <Layout />
    </Fragment>
  );
}

export default App;
