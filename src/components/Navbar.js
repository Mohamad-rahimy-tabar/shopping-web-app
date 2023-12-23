import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUser, useLoginUserAction } from "../Context/Providers/LoginUserProvider";
import { toast } from "react-hot-toast";
//
const Navbar = () => {
  const navigate = useNavigate();
  const user = useLoginUser();
  const setUser = useLoginUserAction();
  const profilePageHandler = () => {
    navigate("/profile");
  };
  const loginlogoutHandler = (e) => {
    const target = e.currentTarget.childNodes[1].innerHTML;
    if (target === "Login") navigate("/login", { state: { redirect: "/products" } });
    else {
      localStorage.clear();
      setUser(null);
      toast.success("Successfully Logout!");
    }
  };
  return (
    <aside className="flex items-center justify-center mb-2 mr-2 h-full w-[20%] md:w-48 flex-col">
      <div className="flex w-full h-full p-2 rounded-lg flex-col bg-main-primary">
        <div className="flex flex-row items-center justify-center w-full p-2 mb-2">
          <span
            className="p-2 rounded-full shadow-md cursor-pointer bg-main-base"
            onClick={profilePageHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <div className="hidden md:flex items-center justify-center w-full h-full p-1 rounded-md shadow-md ml-4 bg-main-base">
            <span className="">{user ? user.name.firstname : "guest"}</span>
          </div>
        </div>
        <ul className="flex items-center text-base gap-1 justify-center flex-col">
          <NavLink
            to="home"
            className={({ isActive }) =>
              `${
                isActive && "text-main-primary bg-main-base "
              }cursor-pointer flex items-center flex-row  w-full p-2 md:p-4 justify-center md:justify-start hover:bg-main-base transition-all hover:text-main-primary duration-500 rounded-md`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="hidden md:block ml-2">Home</span>
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `${
                isActive && "text-main-primary bg-main-base shadow-md "
              }cursor-pointer flex items-center flex-row w-full justify-center p-2 md:p-4 md:justify-start hover:bg-main-base transition-all hover:text-main-primary duration-500 rounded-md`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="hidden md:block ml-2">Products</span>
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `${
                isActive && "text-main-primary bg-main-base shadow-md "
              }cursor-pointer flex items-center flex-row w-full justify-center p-2 md:p-4 md:justify-start hover:bg-main-base transition-all hover:text-main-primary duration-500 rounded-md`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="hidden md:block ml-2">Cart</span>
            {/* <span className="flex items-center justify-center w-5 h-5 ml-4 text-sm bg-black rounded-full text-main-primary">
              {cart ? cart.length : 0}
            </span> */}
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `${
                isActive && "text-main-primary bg-main-base shadow-md "
              }cursor-pointer flex items-center justify-center p-2 md:p-4 flex-row w-full md:justify-start hover:bg-main-base transition-all hover:text-main-primary duration-500 rounded-md`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="hidden md:block ml-2">Profile</span>
          </NavLink>
          <button
            className="flex flex-row  items-center w-full justify-center p-2 md:p-4 md:justify-start  transition-all duration-500 rounded-md cursor-pointer hover:text-main-base"
            onClick={(e) => loginlogoutHandler(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span className="hidden md:block ml-2 text-xs md:text-base">{user ? "Logout" : "Login"}</span>
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
