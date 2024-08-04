
import { HTMLImageProps } from '../../types';
import * as S from './elements';

export const Image = ({ ...props }: HTMLImageProps) => {
  return <S.Image {...props} />;
};
