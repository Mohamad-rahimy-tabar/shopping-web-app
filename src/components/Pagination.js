import { NavLink } from "react-router-dom";


const Pagination = ({pages}) => {
  
  return (
    <section className="text-xs md:text-sm lg:text-base w-full h-full text-main-primary rounded-md flex items-center justify-center gap-2">
      {pages.map((p) => (
        <NavLink key={p.page} to={p.to} className={({ isActive }) => `${isActive && "bg-main-primary text-main-base shadow-md "} hover:bg-main-primary hover:text-main-base p-1 md:p-2 rounded-md`}>
          {p.page}
        </NavLink>
      ))}
    </section>
  );
};

export default Pagination;
