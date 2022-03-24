import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    min-height: 4rem;
    background-color: var(--header);
    z-index: 5;
    position: sticky;
    top: 0;

    h1{
        font-size: 2rem;
        font-weight: 400;
        color: var(--primary);
    }
`;