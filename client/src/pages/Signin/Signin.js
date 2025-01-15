import { Card, CardBody, Input, Button, Link, Checkbox } from "@nextui-org/react";
import Header from "../../components/Header/Header";
import Googlelogo from "../../images/search.png";
import MicrosoftLogo from "../../images/microsoft.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlSignin = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5555/api/connexion/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log("Signin success");
        navigation("/dashboard");
      } else {
        console.error("Signin failed:", data.message);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-lg p-8">
          <CardBody className="gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Sign In</h2>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="underlined"
                className="max-w-full text-base"
              />
              <Input
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                variant="underlined"
                className="max-w-full text-lg"
              />
              <Button
                disabled={loading}
                onClick={handlSignin}
                type="submit"
                color="primary"
                className="mt-2"
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </div>
            <div className="flex flex-row justify-between">
              <Checkbox defaultSelected size="sm">
                Remember me
              </Checkbox>
              <Link href="/forgotpassword" size="sm" className="text-base underline">
                Forgot password?
              </Link>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <Button key="google" className="w-48" variant="faded">
                <img width={20} src={Googlelogo} alt="Google logo" /> Google
              </Button>
              <Button key="microsoft" className="w-48" variant="faded">
                <img width={20} src={MicrosoftLogo} alt="Microsoft logo" /> Microsoft
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Signin;
