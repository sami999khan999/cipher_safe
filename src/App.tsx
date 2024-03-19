import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  const user = useUser();
  const location = useLocation();

  const inAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  useEffect(() => {
    console.log(user.user?.id);
  }, [user]);

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
    </>
  );
};

export default App;
