import {
  Container,
  Spinner,
  SpinnerItem1,
  SpinnerItem2,
  SpinnerItem3,
  SpinnerItem4,
  SpinnerItem5,
  SpinnerItem6,
} from "./CubeLoaderStyles";

const CubeLoader = ({ color }) => {
  return (
    <>
      <Container>
        <Spinner color={color}>
          <SpinnerItem1 />
          <SpinnerItem2 />
          <SpinnerItem3 />
          <SpinnerItem4 />
          <SpinnerItem5 />
          <SpinnerItem6 />
        </Spinner>
      </Container>
    </>
  );
};

export default CubeLoader;
