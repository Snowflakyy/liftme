import React, { forwardRef,ForwardedRef, ReactElement } from 'react'
import * as S from "./elements" 
import type { HTMLButtonProps } from '../../types'
import {Icon} from "../Icon"
export interface ButtonProps extends HTMLButtonProps {
  variant ?: "primary" | "secondary" | "tertiary" | "ghost",
  iconPath ?:"none" | string
}

// export const Button = (isGame : boolean,children : ReactElement) => {
    
//   return (
//     <S.Button>{children}</S.Button>
//   )
// }


export const Button = forwardRef(
  (
    { variant,iconPath ,...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <S.Button {...props}iconPath={iconPath} variant={variant} ref={ref}>{iconPath!=null && <Icon path={iconPath} xmlns="http://www.w3.org/2000/svg" />}
    </S.Button>;
  }
); //using ref to access the button


// export const Button = ({variant,target,icon,...props}:ButtonProps)=>{
//   return <S.Button {...props} variant={variant} icon={icon} target={target} />;
// }

/*
// Вашият компонент
import * as S from "./elements";
import { forwardRef, ForwardedRef } from "react";
import type { HTMLButtonProps } from "../../types";

export interface ButtonProps extends HTMLButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef(
  (
    { variant, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <S.Button {...props} variant={variant} ref={ref} />;
  }
);

Button.displayName = "Button"; // Добавяне на displayName

export default Button;

*/

