// styled
// reset the css
import { Home } from "./pages/home/home";
import { GlobalStyle } from "./styled.app";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
