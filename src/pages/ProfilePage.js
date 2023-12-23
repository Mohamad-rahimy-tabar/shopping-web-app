
import { useLoginUser } from "../Context/Providers/LoginUserProvider";
import NoLoginUser from "../components/NoLoginUser";
import Userinfo from "../components/Userinfo";

const ProfilePage = () => {
  const user = useLoginUser();
  
  if (!user) return <NoLoginUser />;
  return (
    <section className=" w-full h-full flex flex-col gap-8 items-center justify-start">
      <fieldset className="border flex flex-col gap-4 border-main-primary w-full p-4 rounded-md shadow-md">
        <legend className="p-2 font-kavoon">User information</legend>
        <Userinfo />
      </fieldset>
      <fieldset className="border border-main-primary w-full p-4 rounded-md shadow-md">
        <legend className="p-2 font-kavoon">User account</legend>
        <div className="flex items-center">
          <span className="shadow-md mr-4 p-2 rounded-full bg-main-primary text-main-base flex items-center justify-center">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <div>
            <div className="flex items-center">
              <div>User Name :</div>
              <div className="ml-4">{user.username}</div>
            </div>
            <div className="flex items-center">
              <div>email :</div>
              <div className="ml-4">{user.email}</div>
            </div>
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default ProfilePage;
