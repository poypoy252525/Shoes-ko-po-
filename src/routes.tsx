import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AddToCartPage from "./pages/AddToCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import FeaturedPlayerPage from "./pages/FeaturedPlayerPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import BuyNowPage from "./pages/BuyNowPage";
import GoHomePage from "./pages/GoHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductPage /> },
      { path: "addtocart", element: <AddToCartPage /> },
      { path: "addtocart/checkout", element: <CheckoutPage /> },
      { path: "addtocart/checkout/:order", element: <BuyNowPage /> },
      { path: "placeorder/success", element: <GoHomePage /> },
      { path: "featured-player/:id", element: <FeaturedPlayerPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "orders", element: <OrdersPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
export default router;
