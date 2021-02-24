// sections
import { Hero } from "./heroSection/hero";
import { Navigation } from "./navigations/navigation";
// styled
import { Box, Container } from "@material-ui/core";

export function Home() {
  return (
    <Box>
      <Navigation />
      <Hero />
      Navigaion
      <Container>
        <h1>Hero section</h1>
      </Container>
    </Box>
  );
}
