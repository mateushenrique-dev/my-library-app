import React from 'react'
import Svg, { Path } from 'react-native-svg';

export default function Marker() {
  return (
    <Svg
      width={127}
      height={116}
      viewBox="0 0 127 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 4H39.7C46.0122 4 52.0658 6.50749 56.5291 10.9709C60.9925 15.4342 63.5 21.4878 63.5 27.8V111.1C63.5 106.366 61.6194 101.826 58.2719 98.4781C54.9243 95.1306 50.3841 93.25 45.65 93.25H4V4Z"
        stroke="#A99985"
        stroke-width={8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M123 4H87.3C80.9878 4 74.9342 6.50749 70.4709 10.9709C66.0075 15.4342 63.5 21.4878 63.5 27.8V111.1C63.5 106.366 65.3806 101.826 68.7281 98.4781C72.0757 95.1306 76.6159 93.25 81.35 93.25H123V4Z"
        stroke="#A99985"
        stroke-width={8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}