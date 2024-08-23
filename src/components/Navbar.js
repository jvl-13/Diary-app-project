import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { persistStore } from 'redux-persist';
import { store } from '../redux/store';

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const userId = useSelector((state) => state.auth.user?._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch logout action
    dispatch({ type: 'LOGOUT' });

    // Purge redux-persist store
    persistStore(store).purge();

    // Clear localStorage
    localStorage.clear();

    // Navigate to home page
    navigate("/");
  };

  return (
    <div className=" h-16 items-center flex">
      <div className="ml-7 w-1/5">
        <Link
          to="/user"
          className="block cursor-pointer py-1.5 font-brand leading-relaxed tracking-normal text-inherit antialiased text-3xl"
        >
          MiNook
        </Link>
      </div>
      <div className="w-3/5 relative py-2.5 leading-relaxed font-sans text-right">
        {/* Search bar example */}
      </div>
      <div className="mr-7 w-1/5 text-right">
        <a href={`/dashboard/${userId}`}><span className="text-sm font-text mr-2">{user.email}</span></a>
        {user && (
          <button onClick={handleLogout}>
            <FontAwesomeIcon className="fa-xl text-right" icon={faSignOutAlt} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
