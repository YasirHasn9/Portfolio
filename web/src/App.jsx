import CssBaseline from "@material-ui/core/CssBaseline";
import { Home } from "./pages/home/home";
import { Logo } from "./common/logo/logo";

import { Wrapper } from "./app.styled";
export function App() {
  return (
    <Wrapper>
      <Logo />
      <Home />
      <CssBaseline />
    </Wrapper>
  );
}
