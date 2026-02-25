import logo from "../assets/images/netflix-logo-transparent.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-5 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={logo} alt="Netflix_Logo" />
    </div>
  );
};

export default Header;
