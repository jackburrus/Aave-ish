import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function BorrowIcon(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M36 28.253l-5-4.5c-5.5-.167-16.6-.4-17 0-.5.5-7.104 6.33-8 7-1 .747-2.833 1.666-4 2v11l2 1.5h32l18-19c.167-1.334.1-4.4-1.5-6-1.6-1.6-5-1.334-6.5-1l-10 9zm0 0l-4 4.5-8 .5"
        stroke="#D0F9F7"
        strokeWidth={3.5}
      />
      <Circle cx={26} cy={12} r={4.25} stroke="#D0F9F7" strokeWidth={3.5} />
      <Circle
        cx={41}
        cy={6}
        r={4.25}
        stroke="#4699F7"
        strokeOpacity={0.6}
        strokeWidth={3.5}
      />
    </Svg>
  );
}

export default BorrowIcon;
