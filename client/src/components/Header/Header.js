import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, Avatar, CardFooter, Select, SelectItem, Modal, Dropdown, useDisclosure, chip, Chip, Image, Divider, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, Checkbox, } from '@nextui-org/react';
import { useState } from "react";


export default function Header() {
    const location = useLocation();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleGoogleLogin = () => {
      // Implement Google login logic here
      console.log("Google login clicked");
    };
  
    const handleEmailLogin = () => {
      // Implement email login logic here
      console.log("Email login clicked", { email, password });
    };

    return (
        <>
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="top-center"
      classNames={{
        base: "max-w-md",
        header: "border-b border-gray-200 dark:border-gray-700",
        body: "py-6",
        footer: "border-t border-gray-200 dark:border-gray-700"
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-center">Welcome Back</h2>
              <p className="text-sm text-gray-500 text-center">Sign in to continue</p>
            </ModalHeader>
            <ModalBody>
              <Button
                // startContent={<Chrome className="w-5 h-5" />}
                className="w-full bg-white border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800"
                size="lg"
                onClick={handleGoogleLogin}
              >
                Continue with Google
              </Button>

              <div className="flex items-center gap-2 my-4">
                <Divider className="flex-1" />
                <span className="text-sm text-gray-500">OR</span>
                <Divider className="flex-1" />
              </div>

              <div className="space-y-4">
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                //   endContent={<Mail className="text-gray-400" size={20} />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                //   endContent={<Lock className="text-gray-400" size={20} />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <Checkbox defaultSelected size="sm">
                  Remember me
                </Checkbox>
                <Link href="#" size="sm" className="text-primary">
                  Forgot password?
                </Link>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={handleEmailLogin}
                className="flex-1"
              >
                Sign in
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>


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
                        <NavbarItem isActive={false}>
                            <Link color="foreground" href="#">
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive={true}>
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
                            <Link onPress={onOpen} href="#">Login</Link>
                        </NavbarItem>
                    )}
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/signup" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>

    );
}
