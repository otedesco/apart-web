import { m as Motion } from "framer-motion";
import { keyframes, styled } from "styled-components";
import { layout, space, borderRadius } from "styled-system";

import { appearAnimation, disappearAnimation } from "../../util/animationToolkit";
import { SkeletonProps, variant as VARIANT } from "./types";

export const AnimationWrapper = styled(Motion.div)`
  position: relative;
  will-change: opacity;
  opacity: 0;
  &.appear {
    animation: ${appearAnimation} 0.3s ease-in-out forwards;
  }
  &.disappear {
    animation: ${disappearAnimation} 0.3s ease-in-out forwards;
  }
`;

export const SkeletonWrapper = styled.div<SkeletonProps>`
  position: relative;
  ${layout}
  ${space}
  overflow: hidden;
`;

export const Root = styled.div<SkeletonProps>`
  min-height: 20px;
  display: block;
  background-color: ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ variant, theme }) => {
    if (variant === VARIANT.CIRCLE) return theme.radii.circle;
    if (variant === VARIANT.ROUND) return theme.radii.large;
    return theme.radii.small;
  }};
  ${layout}
  ${space}
  ${borderRadius}
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
`;

const waves = keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;

export const Waves = styled(Root)`
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
