import { useLoginUser } from "../Context/Providers/LoginUserProvider";
const Userinfo = () => {
  const user = useLoginUser();
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center">
        <span className="shadow-md mr-4 p-2 bg-main-primary text-main-base flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </span>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="">Name :</div>
            <div className="ml-4">{user.name.firstname}</div>
          </div>
          <div className="flex items-center">
            <div className="">Last Name :</div>
            <div className="ml-4">{user.name.lastname}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="shadow-md mr-4 p-2 rounded-full text-main-base bg-main-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </span>
        <div className="">Phone :</div>
        <div className="ml-4">{user.phone}</div>
      </div>
      <div className="flex items-center">
        <span className="shadow-md mr-4 p-2 flex items-center justify-center bg-main-primary rounded-full text-main-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
        </span>
        <div>
          <div className="flex items-center">
            <div className="">City :</div>
            <div className="ml-4">{user.address.city}</div>
          </div>
          <div className="flex items-center">
            <div>Street :</div>
            <div className="ml-4">{user.address.street}</div>
          </div>
          <div className="flex items-center">
            <div>Number :</div>
            <div className="ml-4">{user.address.number}</div>
          </div>
          <div className="flex items-center">
            <div>Zipcode :</div>
            <div className="ml-4">{user.address.zipcode}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Userinfo;
