import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import MyFlags from "./Flags";
import Image from "next/image";


export default function Header() {

  
  return (
    <Navbar isBordered>
      <NavbarBrand>
       <Image src="/images/logo-1.png" alt="logo" width={100} height={100}/> 
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link  href="#" aria-current="page">
         Why Parking Time?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="white">
            Contact us
          </Button>
        </NavbarItem>

        <NavbarItem>
          < MyFlags />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
