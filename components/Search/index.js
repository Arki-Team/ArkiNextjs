import React from "react";
import Results from "./Results";
import Filter from "./Filter";
import ShowOptions from "./ShowOptions";

import {
  Container,
  Wrapper,
  ResultsWrapper,
  DesktopFilter,
} from "./SearchElemnts";
const ShowSearch = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <DesktopFilter>
            <Filter></Filter>
          </DesktopFilter>

          <ResultsWrapper>
            {/* <ShowOptions /> */}
            <Results></Results>
          </ResultsWrapper>
        </Wrapper>
      </Container>
      {/* filter */}
      {/* search bar  */}
      {/* showOptions */}
      {/* results */}
    </>
  );
};

export default ShowSearch;
