import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 24rem;
`;

export const StyledCardBody = styled.div`
  padding: 1rem;
`;

export const StyledCardDetails = styled.p`
  align-items: center;
  color: #93a2ac;
  display: flex;
  font-weight: 100;
`;

export const StyledCardFooter = styled.div`
  border-top: 1px solid #eaebec;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 1rem;
`;

export const StyledCardText = styled.span`
  font-size: 0.75rem;
  line-height: 1.125rem;
  margin-left: 0.5rem;
`;
