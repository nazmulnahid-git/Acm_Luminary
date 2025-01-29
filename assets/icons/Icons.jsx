import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const defaultProps = {
  width: 26,
  height: 26,
  color: "#000000",
  strokeWidth: 2,
};

export const IconHome = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M9 22L9.00192 17.9976C9.00236 17.067 9.00258 16.6017 9.15462 16.2347C9.35774 15.7443 9.74746 15.3547 10.2379 15.1519C10.6051 15 11.0704 15 12.001 15V15C12.9319 15 13.3974 15 13.7647 15.152C14.2553 15.355 14.645 15.7447 14.848 16.2353C15 16.6026 15 17.0681 15 17.999V22"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path
      d="M7.08848 4.76243L6.08847 5.54298C4.57181 6.72681 3.81348 7.31873 3.40674 8.15333C3 8.98792 3 9.95205 3 11.8803V13.9715C3 17.7562 3 19.6485 4.17157 20.8243C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8243C21 19.6485 21 17.7562 21 13.9715V11.8803C21 9.95205 21 8.98792 20.5933 8.15333C20.1865 7.31873 19.4282 6.72681 17.9115 5.54298L16.9115 4.76243C14.5521 2.92081 13.3724 2 12 2C10.6276 2 9.44787 2.92081 7.08848 4.76243Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconCommunity = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M20.7739 18C21.5232 18 22.1192 17.5285 22.6543 16.8691C23.7498 15.5194 21.9512 14.4408 21.2652 13.9126C20.5679 13.3756 19.7893 13.0714 18.9999 13M17.9999 11C19.3806 11 20.4999 9.88071 20.4999 8.5C20.4999 7.11929 19.3806 6 17.9999 6"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M3.2259 18C2.47659 18 1.88061 17.5285 1.34548 16.8691C0.250028 15.5194 2.04861 14.4408 2.73458 13.9126C3.43191 13.3756 4.21052 13.0714 4.99994 13M5.49994 11C4.11923 11 2.99994 9.88071 2.99994 8.5C2.99994 7.11929 4.11923 6 5.49994 6"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M8.08368 15.1112C7.0619 15.743 4.38286 17.0331 6.01458 18.6474C6.81166 19.436 7.6994 20 8.8155 20H15.1843C16.3004 20 17.1881 19.436 17.9852 18.6474C19.6169 17.0331 16.9379 15.743 15.9161 15.1112C13.52 13.6296 10.4797 13.6296 8.08368 15.1112Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.4999 7.5C15.4999 9.433 13.9329 11 11.9999 11C10.0669 11 8.49988 9.433 8.49988 7.5C8.49988 5.567 10.0669 4 11.9999 4C13.9329 4 15.4999 5.567 15.4999 7.5Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
  </Svg>
);

export const IconEvent = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || 24}
    height={height || 24}
    color={color || "#000000"}
    fill="none"
    {...props}
  >
    <Path
      d="M18 2V4M6 2V4"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 8H20.5"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 8H21"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);


export const IconNotificationOld = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M12.5 3H11.5C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V11.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path
      d="M7 11H11"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 16H15"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconPlus = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || 24}
    height={height || 24}
    color={color || "#000000"}
    fill="none"
    {...props}
  >
    <Path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M12 8V16M16 12H8"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);


export const IconNotification = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || 24}
    height={height || 24}
    color={color || "#000000"}
    fill="none"
    {...props}
  >
    <Path
      d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
      stroke={color || "#000000"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
      stroke={color || "#000000"}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);


export const IconProfile = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
  </Svg>
);

export const IconBack1 = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path
      d="M8 12L16 12M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconBack = ({ width, height, color, strokeWidth, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconEmail = ({ width, height, color, strokeWidth, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconPassword = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path
      d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 15.49V15.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15.49V15.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 15.49V15.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconSettings = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path
      d="M20.7906 9.15201C21.5969 10.5418 22 11.2366 22 12C22 12.7634 21.5969 13.4582 20.7906 14.848L18.8669 18.1638C18.0638 19.548 17.6623 20.2402 17.0019 20.6201C16.3416 21 15.5402 21 13.9373 21L10.0627 21C8.45982 21 7.6584 21 6.99807 20.6201C6.33774 20.2402 5.93619 19.548 5.13311 18.1638L3.20942 14.848C2.40314 13.4582 2 12.7634 2 12C2 11.2366 2.40314 10.5418 3.20942 9.152L5.13311 5.83621C5.93619 4.45196 6.33774 3.75984 6.99807 3.37992C7.6584 3 8.45982 3 10.0627 3L13.9373 3C15.5402 3 16.3416 3 17.0019 3.37992C17.6623 3.75984 18.0638 4.45197 18.8669 5.83622L20.7906 9.15201Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
  </Svg>
);

export const IconLogout = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round" />
    <Path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round" />

  </Svg>);


export const IconEdit = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round" />
    <Path
      d="M13 4L20 11"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round" />
    <Path
      d="M14 22L22 22"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round" />
  </Svg>
);

export const IconCamera = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M7.00018 6.00055C5.77954 6.00421 5.10401 6.03341 4.54891 6.2664C3.77138 6.59275 3.13819 7.19558 2.76829 7.96165C2.46636 8.58693 2.41696 9.38805 2.31814 10.9903L2.1633 13.501C1.91757 17.4854 1.7947 19.4776 2.96387 20.7388C4.13303 22 6.10271 22 10.0421 22H13.9583C17.8977 22 19.8673 22 21.0365 20.7388C22.2057 19.4776 22.0828 17.4854 21.8371 13.501L21.6822 10.9903C21.5834 9.38805 21.534 8.58693 21.2321 7.96165C20.8622 7.19558 20.229 6.59275 19.4515 6.2664C18.8964 6.03341 18.2208 6.00421 17.0002 6.00055"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round" />
    <Path
      d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path d="M11.9998 6H12.0088"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconLocation = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path
      d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
  </Svg>
);

export const IconPhone = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
  </Svg>
);


export const IconGallery = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Circle cx="16.5" cy="7.5" r="1.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path d="M16 22C15.3805 19.7749 13.9345 17.7821 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.67658 14.0019 3.33776 14.0127 3 14.0351"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round"
    />
    <Path d="M13 18C14.7015 16.6733 16.5345 15.9928 18.3862 16.0001C19.4362 15.999 20.4812 16.2216 21.5 16.6617"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconVideo = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
    <Path d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Circle cx="11.5" cy="9.5" r="1.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
    />
  </Svg>
);

export const IconDelete = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M9.5 16.5L9.5 10.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M14.5 16.5L14.5 10.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const IconMenu = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    color={color || defaultProps.color}
    fill="none"
    {...props}
  >
    <Path
      d="M4 9L20 9"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 15L14 15"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconComment = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    fill="none"
    {...props}
  >
    <Path
      d="M8 13.5H16M8 8.5H12"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round" />
    <Path
      d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round" />
  </Svg>
);

export const IconHeart = ({
  width,
  height,
  color,
  strokeWidth,
  fill,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    {...props}
  >
    <Path
      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      fill={fill || "none"}
    />
  </Svg>
);

export const IconShare = ({
  width,
  height,
  color,
  strokeWidth,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || defaultProps.width}
    height={height || defaultProps.height}
    fill="none"
    {...props}
  > <Path
      d="M18 7C18.7745 7.16058 19.3588 7.42859 19.8284 7.87589C21 8.99181 21 10.7879 21 14.38C21 17.9721 21 19.7681 19.8284 20.8841C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8841C3 19.7681 3 17.9721 3 14.38C3 10.7879 3 8.99181 4.17157 7.87589C4.64118 7.42859 5.2255 7.16058 6 7"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M12.0253 2.00052L12 14M12.0253 2.00052C11.8627 1.99379 11.6991 2.05191 11.5533 2.17492C10.6469 2.94006 9 4.92886 9 4.92886M12.0253 2.00052C12.1711 2.00657 12.3162 2.06476 12.4468 2.17508C13.3531 2.94037 15 4.92886 15 4.92886"
      stroke={color || defaultProps.color}
      strokeWidth={strokeWidth || defaultProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);