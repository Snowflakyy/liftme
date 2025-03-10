import styled from "styled-components";
import { theme } from "../../styles"
import { H1Props, H3Props, H4Props, BodyProps } from ".";

export const Heading1 = styled(({ variant, ...props }: H1Props) => (
  <h1 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h1[variant]}
`;


export const Heading3 = styled(({ variant, ...props }: H3Props) => (
  <h3 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h3[variant]}
`;

export const Heading4 = styled(({ variant , ...props }: H4Props) => (
  <h4 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h4[variant]}
`;

export const Body = styled(({ variant,subvariant , ...props }: BodyProps) => (
  <h5 {...props} />
))`
  ${({ variant,subvariant }) => variant && subvariant && theme.typography.body[variant][subvariant]}
`;