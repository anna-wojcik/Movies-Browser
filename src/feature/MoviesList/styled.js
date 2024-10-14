import styled, { css } from "styled-components";

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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const Poster = styled.img`
  max-width: 292px;
  max-height: 434px;
  border-radius: 5px;
  margin: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const MovieDetails = styled.div`
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 0;
  }
`;

export const MovieName = styled.p`
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
  margin: 8px 0;
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

export const Pager = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.pattensBlue};
  border: none;
  border-radius: 5px;
  margin: 6px;
  padding: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const PageInfo = styled.div`
  margin: 0 16px;
  display: flex;
`;

export const PageInfoStyled = styled.p`
  color: #d6e4ff;
  font-size: 16px;
  font-weight: 400;

  ${({ $number }) =>
    $number &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;
      padding: 0 8px;
    `}
`;
