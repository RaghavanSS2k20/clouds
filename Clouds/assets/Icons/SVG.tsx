import React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";
interface SVGComponentProps  {
    size?:number,
    fill?:string

}
export const SearchSVGComponent:React.FC<SVGComponentProps>=({size, fill , ...props})=>(
    <Svg
    fill={fill}
    width={`${size}px`}
      height={`${size}px`}
    viewBox="-2.5 -2.5 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin"
    className="jam jam-search"
    {...props}
    
  >
    <Path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
  </Svg>
)

export const MinusSVGComponent:React.FC<SVGComponentProps>=({size, fill, ...props})=>(
  <Svg
  fill={fill}
  width={`${size}px`}
      height={`${size}px`}
  viewBox="0 0 1024 1024"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512 229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64 64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z" />
</Svg>
)

