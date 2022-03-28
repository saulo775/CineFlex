import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 40rem;
    padding: 0 1.5rem 2rem;
    overflow-y: scroll;
    justify-content: center;
    ::-webkit-scrollbar { 
        display: none;
    }
`;