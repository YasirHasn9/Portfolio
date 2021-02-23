import { Hero } from "./heroSection/hero";
// styled
import { Box, Container } from "@material-ui/core";

export function Home() {
  return (
    <Box>
      <Hero />
      Navigaion
      <Container>
        <h1>Hero section</h1>
      </Container>
    </Box>
  );
}
