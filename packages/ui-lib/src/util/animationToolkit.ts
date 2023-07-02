import { Variants } from "framer-motion";
import { keyframes } from "styled-components";

export const appearAnimation = keyframes`
  from { opacity:0 }
  to { opacity:1 }
`;

export const disappearAnimation = keyframes`
  from { opacity:1 }
  to { opacity:0 }
`;

export const enterFromRightAnimation = keyframes`  
    from {
        opacity: 0;
        transform: translateX(200px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }`;

export const enterFromLeftAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateX(-200px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }`;

export const exitToRightAnimation = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(200px);
    }`;

export const exitToLeftAnimation = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-200px);
    }`;

export const animationHandler = (element: HTMLElement | null) => {
  if (!element) return;
  if (element.classList.contains("appear")) {
    element.classList.remove("appear");
    element.classList.add("disappear");
  } else {
    element.classList.remove("disappear");
    element.classList.add("appear");
  }
};

export const animationVariants: Variants = {
  initial: { transform: "translateX(0px)" },
  animate: { transform: "translateX(0px)" },
  exit: { transform: "translateX(0px)" },
};

export const animationMap = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const promotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;
