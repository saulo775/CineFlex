import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

export function Movie({ id, image_source, movie_name }) {
    return (
        <Container >
            <Link to={`/sessoes/${id}`}>
                <img src={image_source} alt={movie_name} />
            </Link>
        </Container>
    )
}