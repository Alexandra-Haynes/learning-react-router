import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
