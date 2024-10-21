import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.color.woodSmoke};
    color: ${({ theme }) => theme.color.white};
`;

export const WrapperPrimary = styled.div`
    max-width: 1368px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 24px;
        padding: 24px 16px 16px;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    gap: 16px;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        gap: 12px;
    }
`;

export const Item = styled.li`
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        &:first-child {
            margin-right: auto;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    height: 100%;
    margin-right: 80px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        margin-right: 0;
        gap: 8px;
    }
`;

export const Image = styled.img`
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        height: 20px;
        width: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 13px;
    }
`;