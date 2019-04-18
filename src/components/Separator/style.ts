import styled from 'styled-components';

import { SeparatorProps } from './type';

export const StyledSeparator = styled.div`
  margin: 8px 0;
  ${(props: SeparatorProps) => !!props.withBorder && `
    border-bottom: 1px solid #eaebec;
  `}
`;
