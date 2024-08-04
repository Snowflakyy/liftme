import styled, { css } from "styled-components";
import { HTMLSVGProps } from "../../types";
const IconStyles=css`
width: var(--spacing-2xl, 20px);
height: var(--spacing-2xl, 20px);

`
export const Icon = styled.svg<HTMLSVGProps>(({}) => css`${IconStyles}`)

