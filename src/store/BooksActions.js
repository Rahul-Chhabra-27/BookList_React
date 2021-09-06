import { bookActions } from "./Books-slice";

// Redux Thunk
export const sendBooksToDatabase = (books) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        "https://booklist-app-35cd5-default-rtdb.firebaseio.com/books.json",
        {
          method: "PUT",
          body: JSON.stringify(books),
        }
      );
      if (!response.ok) {
        throw new Error("not sending....");
      }
    };

    try {
      await sendData();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDataFromDataBase = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://booklist-app-35cd5-default-rtdb.firebaseio.com/books.json"
      );
      const data = await response.json();
      return data;
    };

    try {
      const data = await getData();
      const books = data || [];
      dispatch(bookActions.replaceState(books));
    } catch (error) {
      console.log(error);
    }
  };
};
