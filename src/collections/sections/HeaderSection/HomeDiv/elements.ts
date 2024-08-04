import { css, styled } from "styled-components";
import Home from "../../../../../public/images/Frame250.jpg"
import {
  H1Bd as _h1,
  BodyLg as _bodylg,
  BodyMdMd as _bodymd,
  Button as _button,
  Icon as _icon,
  Avatar as _avatar,
} from "../../../../components";

export const HomeDiv = styled.div(
  () => css`
max-width: 583px;
height:auto
max-height: 755px;
display:flex
justify-content:center
align-items:center
border-radius: 24px;
background-image: url("../../../../../public/images/Frame250.jpg");

`
);
export const Container = styled.div(
  () => css`
    max-width:453px
    display: flex
    flex-orientation:column
justify-content:center
align-items:center
gap:10px
     &:last-child {
        margin-top: 30px;
    }

`
);

export const HeadingDiv = styled.div(
  () => css`
    height:210px
    width:100%
`
);
export const Heading = styled(_h1)(
  () => css`
    color: #fff;
  `
);




export const BodyDiv = styled.div(
  () => css`
    width: 100%;
    height:369px;

  `
);
// styled(({ variant, subvariant, ...props }: BodyProps) => (
//   <_bodylg {...props} />
export const Body = styled(_bodylg)(
  () => css`
    color: #fff;
  `
);
export const Button = styled(_button)(() => css``);







export const Description = styled(_bodymd)(
  () => css`
    font-size: 16px;
    opacity: 0.5;
  `
);
export const Avatar = styled(_avatar)(() => css``);

export const DescDiv = styled.div(()=>css`
    width:100%;
    height:175px;
`)
// export const H2 = styled(_H2)(
//     () => css`
//       color: white;
//       padding-bottom: 10px;
//     `
//   );
