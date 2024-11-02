import * as React from 'react';
import Svg, { Circle, Path } from "react-native-svg";

const defaultProps = {
  width: 26,
  height: 26,
  color: "#000000",
  strokeWidth: 2
};

export const IconHome = ({ width, height, color, strokeWidth, ...props }) => (
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

export const IconCommunity = ({ width, height, color, strokeWidth, ...props }) => (
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

export const IconNotification = ({ width, height, color, strokeWidth, ...props }) => (
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

export const IconProfile = ({ width, height, color, strokeWidth, ...props }) => (
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

export default IconBack;