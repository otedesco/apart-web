import React, { PropsWithChildren, useRef } from "react";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";

import { animation as ANIMATION, SkeletonProps, variant as VARIANT } from "./types";
import { animationVariants, animationMap, animationHandler } from "../../util/animationToolkit";
import { AnimationWrapper, Pulse, SkeletonWrapper, Waves } from "./styles";

export const SkeletonSimple = ({
  variant = VARIANT.RECT,
  animation = ANIMATION.PULSE,
  ...props
}: PropsWithChildren<SkeletonProps>) => {
  if (animation === ANIMATION.WAVES) {
    return <Waves variant={variant} {...props} />;
  }

  return <Pulse variant={variant} {...props} />;
}

const Skeleton = ({
  variant = VARIANT.RECT,
  animation = ANIMATION.PULSE,
  isDataReady = false,
  children,
  wrapperProps,
  skeletonTop = "0",
  skeletonLeft = "0",
  width,
  height,
  mr,
  ml,
  ...props
}: PropsWithChildren<SkeletonProps>) => {
  const animationRef = useRef<HTMLDivElement>(null);
  const skeletonRef = useRef<HTMLDivElement>(null);

  return (
    <SkeletonWrapper width={width} height={height} mr={mr} ml={ml} {...wrapperProps}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isDataReady && (
            <AnimationWrapper
              key="content"
              ref={animationRef}
              onAnimationStart={() => animationHandler(animationRef.current)}
              {...animationMap}
              variants={animationVariants}
              transition={{ duration: 0.3 }}
            >
              {children}
            </AnimationWrapper>
          )}
          {!isDataReady && (
            <AnimationWrapper
              key="skeleton"
              style={{ position: "absolute", top: skeletonTop, left: skeletonLeft }}
              ref={skeletonRef}
              onAnimationStart={() => animationHandler(skeletonRef.current)}
              {...animationMap}
              variants={animationVariants}
              transition={{ duration: 0.3 }}
            >
              {animation === ANIMATION.WAVES ? (
                <Waves variant={variant} {...props} width={width} height={height} />
              ) : (
                <Pulse variant={variant} {...props} width={width} height={height} />
              )}
            </AnimationWrapper>
          )}
        </AnimatePresence>
      </LazyMotion>
    </SkeletonWrapper>
  );
}

export default Skeleton;
