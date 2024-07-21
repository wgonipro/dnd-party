import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './navbar.tsx';
import Overview from './overview.tsx';

export default function Home() {
    return (
        <Grid
            templateAreas={`"header"
                            "main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'1fr'}
            h='1000px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='1' bg='grey' area={"header"}>
                <NavBar />
            </GridItem>
            <GridItem pl='1' bg='green.300' area={"main"}>
                <Overview />
            </GridItem>
        </Grid>
    );
}
