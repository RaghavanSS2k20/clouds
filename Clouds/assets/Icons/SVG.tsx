import React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";
interface SVGComponentProps  {
    size?:number,
    fill?:string,
    strokeWidth?:number

}
export const SearchSVGComponent:React.FC<SVGComponentProps>=({size, fill ,strokeWidth, ...props})=>(
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

export const MinusSVGComponent:React.FC<SVGComponentProps>=({size, fill,strokeWidth, ...props})=>(
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

export const HomeSVGComponent:React.FC<SVGComponentProps>=({size, fill,strokeWidth, ...props})=>(
  <Svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M1 11L12 2.00003L23 11"
    stroke={fill}
    strokeWidth={strokeWidth}
    strokeMiterlimit={10}
  />
  <Path
    d="M4 13V23H20V13"
    stroke={fill}
    strokeWidth={strokeWidth}
    strokeMiterlimit={10}
    strokeLinecap="square"
  />
</Svg>

)

export const DraftsSVGComponent:React.FC<SVGComponentProps>=({size, fill,strokeWidth, ...props})=>(
  <Svg
    width={size}
    height={size}
    viewBox="0 0 25 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.5 9H1.5C0.948 9 0.5 8.553 0.5 8C0.5 7.447 0.948 7 1.5 7H23.5C24.052 7 24.5 7.447 24.5 8C24.5 8.553 24.052 9 23.5 9Z"
      fill={fill}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M23.5 2H12.5C11.948 2 11.5 1.553 11.5 1C11.5 0.447 11.948 0 12.5 0H23.5C24.052 0 24.5 0.447 24.5 1C24.5 1.553 24.052 2 23.5 2Z"
      fill={fill}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M12.5 16H1.5C0.948 16 0.5 15.553 0.5 15C0.5 14.447 0.948 14 1.5 14H12.5C13.052 14 13.5 14.447 13.5 15C13.5 15.553 13.052 16 12.5 16Z"
      fill={fill}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export const SettingsSVGComponent:React.FC<SVGComponentProps>=({size, fill,strokeWidth, ...props})=>(
  <Svg
  width={size}
  height={size}
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    fill={fill}
    fillRule="evenodd"
    strokeWidth={strokeWidth}
    d="M6.77208,0.683772 C6.90819,0.27543 7.29033,0 7.72076,0 L8.27924,0 C8.70967,0 9.09181,0.27543 9.22792,0.683772 L9.75342,2.26026 C10.125,2.37363 10.4812,2.52208 10.8183,2.70177 L12.3051,1.9584 C12.6901,1.7659 13.155,1.84136 13.4594,2.14572 L13.8543,2.54062 C14.1587,2.84498 14.2341,3.30995 14.0416,3.69494 L13.2983,5.1817 C13.4779,5.51878 13.6264,5.87503 13.7397,6.24658 L15.3162,6.77208 C15.7246,6.90819 16,7.29033 16,7.72076 L16,8.27924 C16,8.70967 15.7246,9.09181 15.3162,9.22792 L13.7397,9.75342 C13.6264,10.125 13.4779,10.4812 13.2983,10.8183 L14.0416,12.3051 C14.2341,12.69 14.1587,13.155 13.8543,13.4594 L13.4594,13.8543 C13.155,14.1586 12.6901,14.2341 12.3051,14.0416 L10.8183,13.2982 C10.4812,13.4779 10.125,13.6264 9.75342,13.7397 L9.22792,15.3162 C9.09181,15.7246 8.70967,16 8.27924,16 L7.72076,16 C7.29033,16 6.90819,15.7246 6.77208,15.3162 L6.24658,13.7397 C5.87503,13.6264 5.51879,13.4779 5.18172,13.2983 L3.69491,14.0417 C3.30992,14.2342 2.84495,14.1587 2.54059,13.8543 L2.14568,13.4594 C1.84132,13.1551 1.76587,12.6901 1.95836,12.3051 L2.70176,10.8183 C2.52208,10.4812 2.37363,10.125 2.26026,9.75342 L0.683772,9.22792 C0.27543,9.09181 0,8.70967 0,8.27924 L0,7.72076 C0,7.29033 0.27543,6.90819 0.683772,6.77208 L2.26026,6.24658 C2.37363,5.87502 2.52208,5.51876 2.70176,5.18167 L1.95837,3.69488 C1.76587,3.30989 1.84133,2.84492 2.14569,2.54056 L2.54059,2.14565 C2.84495,1.84129 3.30993,1.76584 3.69491,1.95833 L5.18172,2.70174 C5.5188,2.52207 5.87504,2.37362 6.24658,2.26026 L6.77208,0.683772 Z M8,12 C10.2091,12 12,10.2091 12,8 C12,5.79086 10.2091,4 8,4 C5.79086,4 4,5.79086 4,8 C4,10.2091 5.79086,12 8,12 Z"
  />
</Svg>
)

export const AddSVGComponent:React.FC<SVGComponentProps>=({size, fill,strokeWidth, ...props})=>(
  <Svg
  width={size}
  height={size}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M11 5.00003H9V9.00003H5V11H9V15H11V11H15V9.00003H11V5.00003ZM10 3.05176e-05C4.48 3.05176e-05 0 4.48003 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48003 15.52 3.05176e-05 10 3.05176e-05ZM10 18C5.59 18 2 14.41 2 10C2 5.59003 5.59 2.00003 10 2.00003C14.41 2.00003 18 5.59003 18 10C18 14.41 14.41 18 10 18Z"
    fill={fill}
  />
</Svg>
)

export const SendSVGComponent:React.FC<SVGComponentProps> = ({size, fill,strokeWidth, ...props}) => (

  <Svg
    fill="#000000"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="send"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <Path
      id="secondary"
      d="M5.44,4.15l14.65,7a1,1,0,0,1,0,1.8l-14.65,7A1,1,0,0,1,4.1,18.54l2.72-6.13a1.06,1.06,0,0,0,0-.82L4.1,5.46A1,1,0,0,1,5.44,4.15Z"
      fill={fill}
    />
    <Path
      id="primary"
      d="M7,12h4M4.1,5.46l2.72,6.13a1.06,1.06,0,0,1,0,.82L4.1,18.54a1,1,0,0,0,1.34,1.31l14.65-7a1,1,0,0,0,0-1.8L5.44,4.15A1,1,0,0,0,4.1,5.46Z"
     
        fill= "none"
        
        strokeLinecap= "round"
        strokeLinejoin= "round"
        strokeWidth= {strokeWidth}
    
    />
  </Svg>
);