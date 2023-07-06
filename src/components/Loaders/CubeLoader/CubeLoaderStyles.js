import { styled, keyframes } from "styled-components";

export const spinnerAnimation = keyframes`
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
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

export const Spinner = styled.div`
  width: 70.4px;
  height: 70.4px;
  --clr: ${(props) => props.color || "rgb(247, 197, 159)"};
  --clr-alpha: ${(props) => props.color + "1a" || "rgb(247, 197, 159, 0.1)"};
  animation: ${spinnerAnimation} 1.6s infinite ease;
  transform-style: preserve-3d;
`;

export const SpinnerItem = styled.div`
  background-color: var(--clr-alpha);
  height: 100%;
  position: absolute;
  width: 100%;
  border: 3.5px solid var(--clr);
`;

export const SpinnerItem1 = styled(SpinnerItem)`
  transform: translateZ(-35.2px) rotateY(180deg);
`;

export const SpinnerItem2 = styled(SpinnerItem)`
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
`;

export const SpinnerItem3 = styled(SpinnerItem)`
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
`;

export const SpinnerItem4 = styled(SpinnerItem)`
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
`;

export const SpinnerItem5 = styled(SpinnerItem)`
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
`;

export const SpinnerItem6 = styled(SpinnerItem)`
  transform: translateZ(35.2px);
`;
