import styled from "styled-components";

export const Container = styled.footer`
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: center;
    max-width: 40rem;
    position: fixed;
    bottom: 0;
    padding: 1rem 1.5rem;
    border-top: 2px solid var(--gray);
    background-color: var(--footer);

    p,h2 {
        font-size: 1.5rem;
        color: var(--text-black);
    }
`;

export const BannerMovieSelected = styled.div`
    min-width: 4rem;
    height: 5.5rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    border: 0.5rem solid #FFFFFF;

    background-image: url(${props => props.url_select_movie});
    background-size: cover;
    background-repeat: no-repeat;
`;