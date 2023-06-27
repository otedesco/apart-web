/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState, memo } from "react";
import { m as motion } from "framer-motion";
import { useTheme } from "hooks";
import { vars } from "ui/css/vars.css";
import { LazyMotion, domAnimation } from "../../Box";

import Svg from "../Svg";

const useMouseEventListener = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const handleMouseEvent = useCallback(() => setIsMouseInside(!isMouseInside), [isMouseInside]);

  return [isMouseInside, handleMouseEvent];
};

function DinamicStop({ color, stopColor, isMouseInside, ...rest }: any) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.stop
        animate={isMouseInside ? "active" : "inactive"}
        variants={{
          active: { stopColor },
          inactive: { stopColor: color },
        }}
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        {...rest}
      />
    </LazyMotion>
  );
}

function StaticStop({ stopColor, ...rest }: any) {
  return <stop stopColor={stopColor} {...rest} />;
}

function GradientDefinitions(props: any) {
  const { color, dinamic, isMouseInside, fillerId, ...rest } = props;
  return (
    <defs>
      <linearGradient x1="17.7549" y1="17" x2="39.2549" y2="36.5" gradientUnits="userSpaceOnUse" id={fillerId}>
        <stop stopColor={color} />
        {dinamic ? <DinamicStop color={color} isMouseInside={isMouseInside} {...rest} /> : <StaticStop {...rest} />}
      </linearGradient>
    </defs>
  );
}

export function LogoIcon(props: any) {
  const { theme } = useTheme();
  const {
    gradient = false,
    dinamic = false,
    color = theme?.colors.contrast || vars.colors.contrast,
    stopColor = theme?.colors.primaryBright || vars.colors.contrast,
    id,
    ...rest
  } = props;
  const [isMouseInside, handleMouseEvent] = useMouseEventListener();
  const FILLER_ID = `${id}-linear`;
  const fill = gradient ? `url(#${FILLER_ID})` : color;

  return (
    <Svg
      viewBox="0 0 43 40"
      width="43"
      height="40"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
        d="M8.25487 0H23.2549C27.6731 0 31.2549 3.58172 31.2549 8V9H34.2549C38.6731 9 42.2549 12.5817 42.2549 17V32C42.2549 36.4183 38.6731 40 34.2549 40H19.2549C14.8366 40 11.2549 36.4183 11.2549 32V31H8.25487C3.83659 31 0.254868 27.4183 0.254868 23V8C0.254868 3.58172 3.83659 0 8.25487 0ZM23.2549 31H16.2549V32C16.2549 33.6569 17.598 35 19.2549 35H34.2549C35.9117 35 37.2549 33.6569 37.2549 32V17C37.2549 15.3431 35.9117 14 34.2549 14H31.2549V23C31.2549 27.4183 27.6731 31 23.2549 31ZM8.25487 5C6.59801 5 5.25487 6.34315 5.25487 8V23C5.25487 24.6569 6.59801 26 8.25487 26H23.2549C24.9117 26 26.2549 24.6569 26.2549 23V8C26.2549 6.34315 24.9117 5 23.2549 5H8.25487Z"
      />
      {gradient && (
        <GradientDefinitions
          fillerId={FILLER_ID}
          color={color}
          stopColor={stopColor}
          isMouseInside={isMouseInside}
          dinamic={dinamic}
          offset={1}
        />
      )}
    </Svg>
  );
}

export function LogoWithTextIcon(props: any) {
  const { theme } = useTheme();
  const {
    gradient,
    dinamic,
    color = theme?.colors.contrast || vars.colors.contrast,
    stopColor = theme?.colors.brandPrimary || vars.colors.brandPrimary,
    id,
    ...rest
  } = props;
  const [isMouseInside, handleMouseEvent] = useMouseEventListener();
  const FILLER_ID = `${id}-linear-with-text`;
  const fillLogo = gradient ? `url(#${FILLER_ID})` : color;

  return (
    <Svg
      width="117"
      height="40"
      viewBox="0 0 117 40"
      fill="none"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      {...rest}
    >
      <path
        d="M43.5327 30.7862L43.2748 31.464H44H46.635H46.9785L47.1017 31.1433L49.0865 25.977H57.0795L59.0643 31.1433L59.1875 31.464H59.531H62.135H62.8591L62.6026 30.7868L55.0386 10.8228L54.9162 10.5H54.571H51.595H51.2503L51.1277 10.8222L43.5327 30.7862ZM64.4817 37.66V38.16H64.9817H67.5237H68.0237V37.66V30.7676C69.2968 31.4432 70.7678 31.774 72.4217 31.774C74.6212 31.774 76.3997 31.083 77.6904 29.6565C78.9851 28.2256 79.5867 26.1083 79.5867 23.4C79.5867 20.6814 78.9894 18.6136 77.6686 17.3378C76.3751 16.0679 74.6149 15.46 72.4527 15.46C71.3127 15.46 70.2911 15.621 69.3974 15.9556C68.806 16.1683 68.2484 16.4671 67.7248 16.8491L67.6481 16.2104L67.5953 15.77H67.1517H64.9817H64.4817V16.27V37.66ZM74.9812 27.5146L74.9805 27.5154C74.3427 28.2911 73.3024 28.728 71.7397 28.728C70.8997 28.728 70.1638 28.6111 69.5252 28.3866C68.9526 28.1671 68.4535 27.8836 68.0237 27.5383V19.9747C68.5009 19.4972 69.0364 19.1422 69.6314 18.9042C70.2907 18.6405 71.0124 18.506 71.8017 18.506C73.4499 18.506 74.4926 18.9143 75.0794 19.6016L75.0794 19.6017L75.0834 19.6063C75.6857 20.2946 76.0447 21.5167 76.0447 23.4C76.0447 25.3561 75.6586 26.6946 74.9812 27.5146ZM81.4884 29.6128L81.4883 29.6129L81.4928 29.6189C82.0251 30.3364 82.7293 30.8759 83.5913 31.2388C84.4435 31.5976 85.3679 31.774 86.3584 31.774C87.739 31.774 88.9274 31.6046 89.9082 31.2479C90.5569 31.012 91.1455 30.6962 91.6715 30.3003L91.7514 31.0192L91.8008 31.464H92.2484H94.3874H94.8874V30.964V21.354C94.8874 19.3668 94.3348 17.8193 93.1215 16.8428C91.9607 15.892 90.2657 15.46 88.1254 15.46C87.0672 15.46 86.0672 15.5445 85.1265 15.7152C84.2156 15.8638 83.4089 16.0671 82.7108 16.3288L82.3864 16.4505V16.797V18.905V19.605L83.0485 19.378C83.7448 19.1392 84.4942 18.9491 85.2976 18.8085C86.0941 18.6691 86.9229 18.599 87.7844 18.599C88.9241 18.599 89.7362 18.7023 90.2564 18.8817C90.7551 19.0537 91.0312 19.3125 91.1698 19.6314L91.1734 19.6396L91.1773 19.6477C91.3599 20.0295 91.4694 20.5868 91.4694 21.354V21.753H86.8544C84.7972 21.753 83.1928 22.1951 82.1673 23.1951C81.1712 24.1459 80.6814 25.3762 80.6814 26.841C80.6814 27.9145 80.9396 28.8493 81.4884 29.6128ZM96.2128 30.964V31.464H96.7128H99.2548H99.7548V30.964V20.2887C100.097 20.0717 100.512 19.8558 101.004 19.6428C101.605 19.3821 102.238 19.1509 102.903 18.9495L102.903 18.9497L102.916 18.9453C103.584 18.7227 104.196 18.5523 104.754 18.4329L105.149 18.3482V17.944V15.96V15.3527L104.553 15.4693C103.569 15.6617 102.568 15.9603 101.551 16.3631L101.547 16.3644C100.842 16.6495 100.197 16.9575 99.6113 17.2894L99.5044 16.2202L99.4593 15.77H99.0069H96.7128H96.2128V16.27V30.964ZM109.279 30.4657L109.279 30.4659L109.288 30.4757C110.156 31.3676 111.401 31.774 112.933 31.774C113.973 31.774 114.913 31.6224 115.745 31.3076L116.068 31.1854V30.84V28.918V28.2313L115.414 28.4421C114.811 28.6367 114.275 28.728 113.801 28.728C112.856 28.728 112.313 28.548 112.037 28.3071C111.786 28.0489 111.604 27.5706 111.604 26.748V18.785H115.01H115.473L115.508 18.3233L115.663 16.3083L115.705 15.77H115.165H111.604V11.868V11.1928L110.958 11.3897L108.416 12.1647L108.062 12.2727V12.643V15.77H106.33H105.83V16.27V18.285V18.785H106.33H108.062V26.872C108.062 28.3438 108.448 29.5633 109.279 30.4657ZM56.2327 22.962H49.9003L53.0539 14.6113L56.2327 22.962ZM89.6515 28.1851C88.9012 28.5219 88.0241 28.697 87.0094 28.697C86.0474 28.697 85.3368 28.5394 84.8388 28.2665C84.4393 28.0298 84.1924 27.6058 84.1924 26.841C84.1924 26.0437 84.4124 25.5424 84.7656 25.2333C85.123 24.9205 85.7971 24.706 86.9164 24.706H91.4694V26.8657C90.963 27.4088 90.3585 27.8486 89.6515 28.1851Z"
        fill={color}
        stroke={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0H23C27.4183 0 31 3.58172 31 8V9H34C38.4183 9 42 12.5817 42 17V32C42 36.4183 38.4183 40 34 40H19C14.5817 40 11 36.4183 11 32V31H8C3.58172 31 0 27.4183 0 23V8C0 3.58172 3.58172 0 8 0ZM23 31H16V32C16 33.6569 17.3431 35 19 35H34C35.6569 35 37 33.6569 37 32V17C37 15.3431 35.6569 14 34 14H31V23C31 27.4183 27.4183 31 23 31ZM8 5C6.34315 5 5 6.34315 5 8V23C5 24.6569 6.34315 26 8 26H23C24.6569 26 26 24.6569 26 23V8C26 6.34315 24.6569 5 23 5H8Z"
        fill={fillLogo}
      />
      {gradient && (
        <GradientDefinitions
          fillerId={FILLER_ID}
          color={color}
          stopColor={stopColor}
          isMouseInside={isMouseInside}
          dinamic={dinamic}
          offset={1}
        />
      )}
    </Svg>
  );
}

export default memo(LogoIcon);
