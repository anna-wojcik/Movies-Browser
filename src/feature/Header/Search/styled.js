import styled from "styled-components";

export const Wrapper = styled.div`
    height: 48px;
    width: 432px;
    background: ${({ theme }) => theme.color.white};
    border-radius: 34px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        height: 40px;
        width: 100%;
        padding: 14px 16px;
    }
`;

export const Input = styled.input`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    font-weight: 400;
    border: none;
    width: 100%;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 13px;
    }
`;