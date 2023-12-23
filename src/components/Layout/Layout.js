import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <section className="flex max-w-sm md:max-w-2xl lg:max-w-full container m-auto items-center h-full p-4 flex-row">
      <Navbar />
      <section className="flex-1 h-full p-4 overflow-auto rounded-lg bg-main-secondary">
        {children}
      </section>
    </section>
  );
};

export default Layout;
