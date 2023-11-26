import { Grid, GridItem } from "@chakra-ui/react";
import Lebron from "../assets/nba_players/lebron.jpg";
import Steph from "../assets/nba_players/steph.jpg";
import Durant from "../assets/nba_players/durant.jpg";
import Kobe from "../assets/nba_players/Kobe.jpg";
import Jordan from "../assets/nba_players/jordan.jpg";
import PlayersCard from "./PlayersCard";
import Section from "./Section";

const PlayersSection = () => {
  return (
    <Section header="Featured Players" viewMore={false}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 200px)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <PlayersCard picture={Lebron} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <PlayersCard picture={Steph} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <PlayersCard picture={Kobe} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <PlayersCard picture={Jordan} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <PlayersCard picture={Durant} />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default PlayersSection;
