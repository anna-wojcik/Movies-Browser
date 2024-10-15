import styled, { css } from "styled-components";

export const PagerWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

export const PagerButton = styled.button`
  background-color: ${({ theme }) => theme.color.pattensBlue};
  border: none;
  border-radius: 5px;
  margin: 6px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const PagerText = styled.div`
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
