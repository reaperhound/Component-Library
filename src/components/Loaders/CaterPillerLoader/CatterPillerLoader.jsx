import {
  Container,
  SpinnerContainer,
  SpinnerItem1,
  SpinnerItem2,
  SpinnerItem3,
  SpinnerItem4,
  SpinnerItem5,
} from "./CatterPillerLoaderStyles";

const CatterPillerLoader = ({ color }) => {
  return (
    <>
      <Container>
        <SpinnerContainer color={color}>
          <SpinnerItem1 />
          <SpinnerItem2 />
          <SpinnerItem3 />
          <SpinnerItem4 />
          <SpinnerItem5 />
        </SpinnerContainer>
      </Container>
    </>
  );
};

export default CatterPillerLoader;
