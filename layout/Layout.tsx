import React from "react";
import AccidentHistoryView from "../components/Products/AccidentHistoryView";
import CarInfo from "../components/Products/CarInfo";
import PriceView from "../components/Products/PriceView";
import Topbar from "../components/Topbar/Topbar";
import SubmitButton from "../components/Products/SubmitButton";
import Bottombar from "../components/Bottombar/Bottombar";
import styled from "styled-components";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/styles";

const Accordion = withStyles({
  root: {
    width: "100%",
    boxShadow: "none",
    position: "inherit",
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid #000000",
    margin: "0 16px",
    padding: 0,
  },
  content: {
    fontSize: "18px",
    letterSpacing: "-0.76px",
    lineHeight: "22px",
    color: "rgb(68, 68, 68)",
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: 0,
    display: "block",
  },
}))(MuiAccordionDetails);

const Layout = () => {
  return (
    <Root>
      <Topbar />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {`중고차 정보 1`}
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <AccidentHistoryView />
            <CarInfo />
            <PriceView />
            <SubmitButton />
          </Container>
        </AccordionDetails>
      </Accordion>
      <Bottombar />
    </Root>
  );
};

export default Layout;

const Root = styled.div`
  max-width: 480px;
  min-width: 375px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  margin-left: 16px;
`;
