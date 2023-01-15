import {Footer, Header} from "./components";
import {Route, Routes} from "react-router";
import {CartPage, HomePage, LoginPage, NotFoundPage, ProfilPage, ShowProductPage, SignInPage} from "./pages";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<SignInPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/produit/:id" element={<ShowProductPage />} />
          <Route path="/panier" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
