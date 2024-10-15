import styled from "styled-components";

export const List = styled.div`
  display: grid;
  gap: 24px;
  margin: 24px 0;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
`;

export const ListItem = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  display: grid;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: 0.3s all;
  cursor: pointer;
  gap: 16px;
  padding: 16px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
  }
`;

export const Poster = styled.img`
  max-width: 292px;
  max-height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const MovieDetails = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 0;
  }
`;

export const MovieName = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
`;

export const MovieYear = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  font-size: 16px;
  margin: 8px 0;
`;

export const MovieGenre = styled.div`
  margin: 0;
`;

export const MovieRate = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;
`;

export const Score = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
