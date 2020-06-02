import styled from 'styled-components';

import { Props } from './type';

export const StyledSeparator = styled.div`
  margin: 12px 0;
  ${(props: Props) => !!props.withBorder && `
    border-bottom: 1px solid #eaebec;
    margin: 12px 0 20px 0;
  `}
`;
