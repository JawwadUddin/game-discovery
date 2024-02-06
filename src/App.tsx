import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="coral" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="teal" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="orange" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
