import styled from "styled-components";

export const RegularTextBaseLine = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;

export const RegularTextSmall1 = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
`;

export const BoldStrongUpperTitle = styled(RegularTextBaseLine)`
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-color-light);
`;

export const BoldStrongRegTitle = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  text-transform: capitalize;
  color: var(--text-color-light);
`;
