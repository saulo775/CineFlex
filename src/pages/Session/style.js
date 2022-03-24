import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    height: 90vh;
    max-width: 40rem;
    overflow-y: scroll;
    justify-content: space-between;
    `;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    gap: 1.5rem;
`;

export const DateSession = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    div {
        display: flex;
        gap: 0.5rem;
    }
`;

export const Day = styled.p`
    font-size: 1.25rem;
    color: var(--text-black);
    line-height: 1.5rem;
`;

export const Hour = styled.div`
    display: flex;
    width: 5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    line-height: 1.25rem;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.02em;
    border-radius: 0.25rem;
    color: var(--text-white);
    background-color: var(--primary);
`;
