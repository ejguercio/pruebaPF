import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
const NavBar=()=>{

    return (
        <div className={css.navContainer}>
         <NavLink to="/basilio" className={css.title} >BASILIO</NavLink>
         <NavLink to="/carlos" className={css.title} >CARLOS</NavLink>
         <NavLink to="/caro" className={css.title} >CARO</NavLink>
         <NavLink to="/edgar" className={css.title} >EDGAR</NavLink>
         <NavLink to="/jamer" className={css.title} >JAMER</NavLink>
         <NavLink to="/jp" className={css.title} >JP</NavLink>
         <NavLink to="/nicole" className={css.title} >NICOLE</NavLink>
         <NavLink to="/robert" className={css.title} >ROBERT</NavLink>
        </div>
    )
};
export default NavBar;
