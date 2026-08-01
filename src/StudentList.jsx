import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentList() {
  const { students, favourites, addFavourite } = useContext(StudentContext);

  return (
    <div className="flex flex-col gap-4">
      {students.map((student, index) => {
        const isFav = favourites.some((item) => item.id === student.id);

        return (
          <div
            key={student.id}
            className="flex items-center justify-between py-1"> 
            <span className="text-lg font-medium text-gray-800">
              {index + 1}. {student.name}
            </span>
            <button onClick={() => addFavourite(student)}
              disabled={isFav}
              className={`px-4 py-1.5 rounded-lg text-sm text-white transition ${
                isFav
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-slate-700 hover:bg-slate-800"}`}>
              {isFav ? "Added" : "Add to Favourite"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default StudentList;