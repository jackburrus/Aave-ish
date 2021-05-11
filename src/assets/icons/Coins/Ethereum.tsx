import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function EthereumIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width="1em"
      height="1em"
      style={{
        width: 50,
        height: 50,
      }}
      viewBox="0 0 50 50"
      transform="rotate(360)"
      {...props}
    >
      <Path
        d="M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75M5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z"
        fill="#626262"
      />
    </Svg>
  );
}

export default EthereumIcon;
