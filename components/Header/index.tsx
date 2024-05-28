'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from "next/link";
import MyFlags from "./Flags";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar isBordered className="bg-primary">
      <NavbarBrand>
       <Image src="/images/logo-1.png" alt="logo" width={60} height={60}/> 
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem isActive>
          <Link  href="/" aria-current="page" className="text-white">
         Why Parking Time?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/about">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/news">
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
          <Button as={Link} href="/contact" className="bg-white text-black size-2 h-5">
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