import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Divider, Input, ModalFooter, Checkbox, Link, Navbar, NavbarContent, NavbarItem, NavbarBrand } from "@heroui/react";
import googleicon from '../../images/google.png';
import chuLogo from '../../images/logo-site (1).jpg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleEmailLogin = () => {
    console.log("Email login clicked", { email, password });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeModal} // Replaces onOpenChange
        placement="top-center"
        classNames={{
          base: "max-w-md",
          header: "border-b border-gray-200 dark:border-gray-700",
          body: "py-6",
          footer: "border-t border-gray-200 dark:border-gray-700"
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold ">Login</h2>
            <p className="text-sm font-semibold text-gray-500 ">Trouvez le métier fait pour vous !</p>
          </ModalHeader>
          <ModalBody>
            <Button
              radius="none"
              className="w-full bg-white border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 font-medium text-sm"
              size="lg"
              onClick={handleGoogleLogin} // Handle Google login
            >
              <img width={20} height={20} src={googleicon} alt="Google Icon" />
              Connectez-vous avec Google
            </Button>

            <div className="flex items-center gap-2 my-4">
              <Divider className="flex-1" />
              <span className="text-sm text-gray-500">OR</span>
              <Divider className="flex-1" />
            </div>

            <div className="space-y-4">
              <Input
                radius="none"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                radius="none"
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
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
              radius="none"
              variant="flat"
              onPress={closeModal} // Close modal
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              radius="none"
              color="primary"
              onPress={handleEmailLogin} // Handle email login
              className="flex-1"
            >
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <div>
        <Navbar maxWidth="xl" isBlurred style={{ paddingTop: '25px' }}>
          <NavbarBrand>
            <img
              src={chuLogo}
              alt="Logo"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "contain",
                display: "block"
              }}
            />
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link href="#" onClick={openModal}>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} href="/signup" color="primary" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

      </div>


    </>
  );
}
