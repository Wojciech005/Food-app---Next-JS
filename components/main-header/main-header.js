

import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from './main-header.module.css';
import Image from "next/image";
import NavLink from "./nav-link";


export default function MainHeader() {



  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
            <NavLink href="/community">Foodies Community</NavLink>
                {/* <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Foodies Community</Link> */}
            </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
