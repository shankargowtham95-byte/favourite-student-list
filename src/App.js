import {  Routes,  Route,  Link,  useLocation} from "react-router-dom";
import  StudentProvider  from "./StudentContext";
import StudentList from "./StudentList";
import FavouriteStudents from "./FavouriteStudents";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex gap-8 px-6 pt-4 pb-2 text-lg font-medium text-white/90">
      <Link to="/" className={location.pathname === "/"
            ? "underline underline-offset-4 font-bold text-white"
            : "text-white opacity-80 hover:text-white hover:underline hover:underline-offset-4 opacity-100"}>
        List of Students
      </Link>
      <Link to="/favourites" className={location.pathname === "/favourites"
            ? "underline underline-offset-4 font-bold text-white"
            : "text-white opacity-80 hover:text-white hover:underline hover:underline-offset-4 opacity-100"}>
        Favourite Students
      </Link>
    </nav>
  );
}

function App() {
  return (
    <StudentProvider>
        <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
          <div className="w-full max-w-lg bg-[#EAE8D0] rounded-xl shadow-2xl overflow-hidden min-h-[380px]">
            <div className="bg-[#D36069] border-b border-red-400">
              <Navigation />
            </div>

            <div className="p-6">
              <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/favourites" element={<FavouriteStudents />} />
              </Routes>
            </div>
          </div>
        </div>
    </StudentProvider>
  );
}
export default App;
