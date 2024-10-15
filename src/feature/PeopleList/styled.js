import styled from "styled-components";
import { ListItem, MovieName } from "../MoviesList/styled";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    gap: 16px;
  }
`;

export const PeopleListItem = styled(ListItem)`
  grid-gap: 12px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px;
    grid-template-columns: auto;
    grid-gap: 8px;
  }
`;

export const PeoplePoster = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 120px;
    height: 178px;
  }
`;

export const PeopleName = styled(MovieName)`
  text-align: center;
  line-height: 1.3;
  margin-bottom: 48px;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    width: 120px;
    margin-bottom: 8px;
  }
`;
