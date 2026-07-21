import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../../routes/route";
import Header from "../Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} element={<route.component />} />;
          })}
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default App;
