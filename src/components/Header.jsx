import "./Header.css";
import { LuSunMedium } from "react-icons/lu";
import { AiOutlineMoon } from "react-icons/ai";

const Header = ({title, theme, setTheme}) => {  

  function toggleTheme(){
    if (theme === "light"){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }

  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme}>
        {theme === "light" ? <LuSunMedium size={30} /> : <AiOutlineMoon size={30} />}
      </span>
    </nav>
  );
};

export default Header;
