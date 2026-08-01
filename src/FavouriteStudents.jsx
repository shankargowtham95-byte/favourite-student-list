import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  if (favourites.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500 font-medium">
        No favourite students added yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {favourites.map((student, index) => (
        <div key={student.id} className="flex items-center justify-between py-1">
          <span className="text-lg font-medium text-gray-800">
            {index + 1}.{student.name}
          </span>
          <button
            onClick={() => removeFavourite(student.id)}
            className="px-6 py-1.5 rounded-xl text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default FavouriteStudents;