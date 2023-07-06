import { styled, keyframes } from "styled-components";

export const rotateSpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const spinnerAniAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateY(-200%);
  }

  60%, 100% {
    transform: rotate(360deg) translateY(-200%);
  }
`;

export const Container = styled.div`
  width: 310px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  width: 24.6px;
  height: 24.6px;
  animation-name: ${rotateSpinAnimation};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  --clr: ${(props) => props.color || "#3e885b"};
`;

export const SpinnerItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--clr);
  border-radius: 50%;
  animation: ${spinnerAniAnimation} 1s infinite backwards;
`;

export const SpinnerItem1 = styled(SpinnerItem)`
  animation-delay: 0.12s;
  opacity: 0.9;
`;

export const SpinnerItem2 = styled(SpinnerItem)`
  animation-delay: 0.24s;
  opacity: 0.8;
`;

export const SpinnerItem3 = styled(SpinnerItem)`
  animation-delay: 0.36s;
  opacity: 0.7;
`;

export const SpinnerItem4 = styled(SpinnerItem)`
  animation-delay: 0.48s;
  opacity: 0.6;
`;

export const SpinnerItem5 = styled(SpinnerItem)`
  animation-delay: 0.6s;
  opacity: 0.5;
`;
