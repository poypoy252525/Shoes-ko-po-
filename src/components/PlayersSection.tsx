import { Grid, GridItem } from "@chakra-ui/react";
import Lebron from "../assets/nba_players/lebron.jpg";
import Steph from "../assets/nba_players/steph.jpg";
import Durant from "../assets/nba_players/durant.jpg";
import Kobe from "../assets/nba_players/Kobe.jpg";
import Jordan from "../assets/nba_players/jordan.jpg";
import PlayersCard from "./PlayersCard";
import Section from "./Section";
import { Link } from "react-router-dom";

const PlayersSection = () => {
  return (
    <Section header="Featured Players" viewMore={false}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 200px)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Link to="/featured-player/Lebron">
            <PlayersCard picture={Lebron} />
          </Link>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <PlayersCard picture={Steph} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Link to="/featured-player/Kobe">
            <PlayersCard picture={Kobe} />
          </Link>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Link to="/featured-player/Jordan">
            <PlayersCard picture={Jordan} />
          </Link>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Link to="/featured-player/Jordan">
            <PlayersCard picture={Durant} />
          </Link>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Link to="/featured-player/Curry">
            <PlayersCard picture={Durant} />
          </Link>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default PlayersSection;
