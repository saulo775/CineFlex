import styled from "styled-components";

export const Container = styled.div`
    width: 9rem;
    height: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    background-image: url(${({image_source}) => image_source});
    background-size: cover;
    background-repeat: no-repeat;
    border: solid 0.5rem white; 
`;