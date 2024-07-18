import { blue } from "@mui/material/colors";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className='nav d-flex justify-content-center'
      style={{ backgroundColor: "blue" }}>
      <Link href='/' className='nav-link text-light'>
        Home
      </Link>

      <Link href='/login' className='nav-link text-light'>
        Login
      </Link>

      <Link href='/register' className='nav-link text-light'>
        Register
      </Link>
    </nav>
  );
};

export default Nav;
