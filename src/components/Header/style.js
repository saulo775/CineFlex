import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    height: 4rem;
    background-color: var(--header);

    h1{
        font-size: 2rem;
        font-weight: 400;
        color: var(--primary);
    }
`;