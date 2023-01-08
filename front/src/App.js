import {Footer, Header} from "./components";
import {Route, Routes} from "react-router";
import {HomePage, NotFoundPage, ShowProductPage} from "./pages";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produit/:id" element={<ShowProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
