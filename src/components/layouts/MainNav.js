import classes from "./MainNav.module.css";
import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <header className={classes.mainNav}>
      <nav>
        <h1>A.W.</h1>
        <ul>
          <li className={classes.animate}>
            <NavLink to="/" style={({isActive}) => {return {textDecoration: isActive ? "underline" : "none", color: isActive ? "black" : "black"}}}>Home</NavLink>
          </li>
          <li className={classes.animate}>
            <NavLink to="/about-me" style={({isActive}) => {return {textDecoration: isActive ? "underline" : "none", color: isActive ? "black" : "black"}}}>About Me</NavLink>
          </li>
          <li className={classes.animate}>
            <NavLink to="/skills" style={({isActive}) => {return {textDecoration: isActive ? "underline" : "none", color: isActive ? "black" : "black"}}}>Skills</NavLink>
          </li>
          <li className={classes.animate}>
            <NavLink to="/projects" style={({isActive}) => {return {textDecoration: isActive ? "underline" : "none", color: isActive ? "black" : "black"}}}>Projects</NavLink>
          </li>
          <li className={classes.animate}>
            <NavLink to="/experience" style={({isActive}) => {return {textDecoration: isActive ? "underline" : "none", color: isActive ? "black" : "black"}}}>Experience</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
