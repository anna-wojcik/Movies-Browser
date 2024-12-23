import styled from "styled-components";
import NoProfile from "../images/no-profile-image.svg";

export const TileContainer = styled.div`
  padding: 16px;
  word-break: break-word;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.border.boxShadow};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  color: ${({ theme }) => theme.color.woodsmoke};
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  &:active {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    padding: 8px;
  }
`;

export const PersonPhotoWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  width: 100%;
  display: flex;
  align-self: center;
  flex-basis: 434px;
`;

export const PersonPhoto = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  background-size: 30%;
  background-image: url(${NoProfile});
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.color.white};
  aspect-ratio: 3/4;
  object-fit: cover;
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonName = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 12px 0 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 16px;
    margin: 8px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 14px;
  }
`;

export const PersonFunction = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 8px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    margin: 5px 0 0;
  }
`;
