import {Footer, Header} from "./components";
import {Route, Routes} from "react-router";
import {HomePage, NotFoundPage} from "./pages";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
