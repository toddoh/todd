import styled from "styled-components";

export const RegularTextBaseLine = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;

export const RegularTextSmall1 = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
`;

export const BoldStrongUpperTitle = styled(RegularTextSmall1)`
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-color-light);
`;
