import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import MyFlags from "./Flags";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar isBordered className="bg-primary">
      <NavbarBrand>
       <Image src="/images/logo-1.png" alt="logo" width={100} height={100}/> 
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem isActive>
          <Link  href="#" aria-current="page" className="text-white">
         Why Parking Time?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="justify-end">
        <NavbarItem>
          <Button as={Link} href="#" className="bg-white text-black size-2 h-5">
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