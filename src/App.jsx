import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import ContactPage from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <ContactPage />,
        path: "/contact",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <SignUp />,
        path: "/signUp",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
