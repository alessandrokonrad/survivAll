import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { Box, Grid } from "@material-ui/core";
import Count from "../../components/Count";
import { useIsVisible } from "react-is-visible";

const Project = () => {
  const ref1 = React.useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = React.useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = React.useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = React.useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = React.useRef();
  const isVisible5 = useIsVisible(ref5);
  return (
    <Container center id="project" width={1} bgcolor="#43a047">
      <Container my={12} width={0.9} color="white">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Container center width={1} height={1}>
              <Box
                textAlign="center"
                maxWidth={600}
                fontSize={30}
                fontWeight="bold"
              >
                „Wir haben die sauberste und beste Technologie, aus Kunststoff
                und Biomasse Energie für die Menschheit zu erzeugen – und das CO
                <sub>2</sub>-neutral“
              </Box>
              <Container mt={3}>
                <Button bgcolor="white" textColor="#388e3c">
                  Mehr zur Kreislauf-Technologie
                </Button>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container center width={1}>
              <Box
                lineHeight={1.5}
                fontSize={18}
                fontWeight={500}
                color="#1b5e20"
              >
                Die richtige Technologie zur richtigen Zeit: Mithilfe
                natürlicher Verfahren und Katalysatoren stellen wir aus
                Abfallkunststoffen und Biomasse nachhaltigen Biokraftstoff her,
                die weltweit unbeschränkt zur Verfügung stehen.
                <br /> Nur ein winziger Anteil der jährlich durch die Sonne
                entstehenden 900 Mrd.Tonnen Biomasse reicht aus, um mit unserer
                Technologie die Mobilität zu Land, zu Wasser und in der Luft
                sowie die Nutzung von Kunststoffen zu gewährleisten – ohne
                Kompromisse bei Leistung, Kapazität und Reichweite.
                <p>Energie bleibt bezahlbar.</p>
              </Box>
            </Container>
          </Grid>
          <Container width={1} my={6} height="2px" bgcolor="#388e3c" />

          <Grid item xs={12} md={4}>
            <Container center width={1} height={1}>
              <Box textAlign="center" maxWidth={800}>
                <Box ref={ref1} fontSize={28} color="#1b5e20" fontWeight="bold">
                  {isVisible1 && (
                    <Count
                      mb={1}
                      fontSize={46}
                      color="#1b5e20"
                      fontWeight="bold"
                      start={0}
                      target={200000000}
                      increment={654321}
                      time={0}
                    />
                  )}
                  Tonnen Kunststoff
                </Box>
                <Box mt={3} fontSize={24} fontWeight={500}>
                  200.000.000 Tonnen Abfall-Kunststoffe in den Weltmeeren, jedes
                  Jahr kommen 8.000.000 Tonnen dazu.
                </Box>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} md={4}>
            <Container center width={1} height={1}>
              <Box textAlign="center" maxWidth={800}>
                <Box ref={ref2} fontSize={28} color="#1b5e20" fontWeight="bold">
                  {isVisible2 && (
                    <Count
                      mb={1}
                      fontSize={46}
                      color="#1b5e20"
                      fontWeight="bold"
                      start={0}
                      target={2000000000}
                      increment={7654321}
                      time={10}
                    />
                  )}
                  Tonnen Kunststoff
                </Box>
                <Box mt={3} fontSize={24} fontWeight={500}>
                  2.000.000.000 Tonnnen Abfall-Kunststoffe an Land, jedes Jahr
                  kommen 200.000.000 Tonnen dazu.
                </Box>
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12} md={4}>
            <Container center width={1} height={1}>
              <Box textAlign="center" maxWidth={800}>
                <Box ref={ref3} fontSize={28} color="#1b5e20" fontWeight="bold">
                  {isVisible3 && (
                    <Count
                      mb={1}
                      fontSize={46}
                      color="#1b5e20"
                      fontWeight="bold"
                      start={0}
                      target={10000000}
                      increment={54321}
                      time={0}
                    />
                  )}
                  Tonnen CO<sub>2</sub>
                </Box>
                <Box mt={3} fontSize={24} fontWeight={500}>
                  10.000.000 Tonnen durch die 15 größten Schweröltanker der Welt
                  verschmutzen unser Klima mit CO<sub>2</sub> pro Jahr
                </Box>
              </Box>
            </Container>
          </Grid>
          <Container my={8} width={1} />

          <Grid item xs={12} md={6}>
            <Container center width={1} height={1}>
              <Box textAlign="center" maxWidth={600}>
                <Box ref={ref4} fontSize={28} color="#1b5e20" fontWeight="bold">
                  {isVisible4 && (
                    <Count
                      mb={1}
                      fontSize={46}
                      color="#1b5e20"
                      fontWeight="bold"
                      start={0}
                      target={2000000000}
                      increment={7654321}
                      time={10}
                    />
                  )}
                  Tonnen Biodiesel
                </Box>
                <Box mt={3} fontSize={24} fontWeight={500}>
                  Mit 2.000.000 Tonnen pro Jahr SurvivAll Biodiesel können die
                  rund 15 Schweröltanker CO<sub>2</sub> neutral zur signifkanten
                  CO<sub>2</sub>-Reduktion von 1.000.000 Tonnen , d.h. minus 40%
                  beitragen
                </Box>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container center width={1} height={1}>
              <Box textAlign="center" maxWidth={600}>
                <Box ref={ref5} fontSize={28} color="#1b5e20" fontWeight="bold">
                  {isVisible5 && (
                    <Count
                      mb={1}
                      fontSize={46}
                      color="#1b5e20"
                      fontWeight="bold"
                      start={0}
                      target={250000}
                      increment={4321}
                      time={10}
                    />
                  )}
                  Fahrzeuge
                </Box>
                <Box mt={3} fontSize={24} fontWeight={500}>
                  250.000 Fahrzeuge, würden bei 1.000.000 Tonnen SurvivAll
                  Biodiesel die Umwelt um rund 2.000.000 Mio. Tonnen CO
                  <sub>2</sub>
                  entlasten.
                </Box>
              </Box>
            </Container>
          </Grid>
          <Container width={1} my={6} height="2px" bgcolor="#388e3c" />

          <Grid item xs={12}>
            <Container center width={1} height={1}>
              <Box
                textAlign="center"
                maxWidth={700}
                fontSize={30}
                fontWeight="bold"
              >
                „Unsere Vision ist ein echter und nachhaltiger Energie- und
                Mobilitätskreislauf. Langfristig kann dies nur mit Hilfe von
                Sonne, Wasser und Kreislaufeffizienz gelingen.“
              </Box>
              <Container mt={3}>
                <Button bgcolor="white" textColor="#388e3c">
                  Mehr zu Ein- und Ausgangsstoffen
                </Button>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Project;
