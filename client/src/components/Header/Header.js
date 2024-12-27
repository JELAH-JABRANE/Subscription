import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    
    return (
        <Navbar 
        maxWidth="full" 
        isBordered 
        isBlurred
        classNames={{
            wrapper: "px-4 sm:px-6 justify-start"
        }}
    >
        <div className="flex items-center gap-4">
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarItem isActive='false'>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" color="secondary" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </div>
        <NavbarContent justify="end">
            {location.pathname !== '/signin' && (
            <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
            </NavbarItem>

            )}
            <NavbarItem>
                <Button as={Link} color="primary" href="/signup" variant="flat">
                    Sign Up
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
    );
}
