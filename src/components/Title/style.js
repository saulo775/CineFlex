import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    min-height: 6.5rem;

    p{
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 4%;
        color: var(--text-black);
    }

    p.success {
        color: #247A6B;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
    }
`;