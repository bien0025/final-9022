import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Crapify
        </Link>
        <div className="space-x-4">
          <Link to="/offer" className="hover:underline">Offer Crap</Link>
          <Link to="/crap" className="hover:underline">Browse Crap</Link>
          <Link to="/mine" className="hover:underline">My Crap</Link>
          <button className="bg-red-500 px-3 py-1 rounded">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
