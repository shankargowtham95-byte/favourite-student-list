import { createContext, useState } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students] = useState([
    { id: 1, name: "Aakash" },
    { id: 2, name: "Arthi" },
    { id: 3, name: "Sanjay" },
    { id: 4, name: "Keerthana" },
    { id: 5, name: "Venkat" },
    { id: 6, name: "Priya" },
    { id: 7, name: "Prakash" },
    { id: 8, name: "Deepika" },
    { id: 9, name: "Gowtham" },
    { id: 10, name: "Varsha" },
  ]);

  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    const exists = favourites.some((item) => item.id === student.id);
    if (!exists) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ students, favourites, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};
export default StudentProvider;
export { StudentContext };