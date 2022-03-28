import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 40rem;
    overflow-y: scroll;
    ::-webkit-scrollbar { 
        display: none;
    }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0 1.5rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.3rem;
        font-weight: 400;
    }

    p + p {
        margin-top: 0.25rem;
    }
`;