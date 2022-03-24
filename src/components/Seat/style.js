import styled from "styled-components";

export const BoxSeat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--seat-available);
    border: solid 1px var(--border1);
    border-radius: 50%;
    width: 1.65rem;
    height: 1.65rem;
    font-size: 0.75rem;
    color: var(--text-black);
`;