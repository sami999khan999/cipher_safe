import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { createUser, newUserDataProps } from "./utils/fetchApi";

const App = () => {
  const user = useUser();
  const location = useLocation();

  const newUserData: newUserDataProps = {
    clerkId: user.user?.id ?? "",
    username: user.user?.username || "",
    email: user.user?.emailAddresses[0]?.emailAddress || "",
    firstName: user.user?.firstName || "",
    lastName: user.user?.lastName || "",
  };

  const inAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  useEffect(() => {
    createUser(newUserData);
  }, []);

  return (
    <>
      {!inAuthPage && (
        <>
          <Header />
          <Home />
        </>
      )}

      <div className="flex flex-col justify-center items-center">
        <Routes>
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />
        </Routes>
      </div>

      {!inAuthPage && <Footer />}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
