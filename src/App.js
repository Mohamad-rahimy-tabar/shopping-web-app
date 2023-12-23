import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import CartProvider from "./Context/Providers/CartProvider";
import ProductProvider from "./Context/Providers/ProductProvider";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartSummary from "./components/CartSummary";
import Toast from "./components/Utils/Toast";
import LoginUserProvider from "./Context/Providers/LoginUserProvider";
import CategoryProvider from "./Context/Providers/CategoryProvider";
//

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <LoginUserProvider>
          <CategoryProvider>
            <Toast />
            <Layout>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/cartsummary" element={<CartSummary />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:pagenumber" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/" element={<WelcomePage />} />
              </Routes>
            </Layout>
          </CategoryProvider>
        </LoginUserProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
