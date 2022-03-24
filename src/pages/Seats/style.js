import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    min-height: 100vh;
    justify-content: space-between;
    flex-direction: column;
    max-width: 40rem;
    `;

export const Content = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
`;

export const SeatsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
`;

export const Legend = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    list-style-type: none;

    padding: 0 1.5rem;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li:nth-child(1)::before {
        content: '';
        background-color: var(--green-ligth);
        border: solid 1px var(--green);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
    }

    li:nth-child(2)::before {
        content: '';
        background-color: var(--yellow-ligth);
        border: solid 1px var(--yellow);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
    }

    li:nth-child(3)::before {
        content: '';
        background-color: var(--seat-available);
        border: solid 1px var(--border1);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
    }
`;

export const ClientData = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2.5rem;

    padding: 0 1.5rem;

    div {
        display: flex;
        flex-direction: column;
    }

    input {
        padding: 1rem;
        border: 2px solid var(--gray-ligth-2);
        border-radius: 0.25rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--text-black);

        :focus{
            border-color: var(--primary);
            outline: none;
        }

        ::placeholder {
            font-style: italic;
            color: #AFAFAF;
        }
    }
`;