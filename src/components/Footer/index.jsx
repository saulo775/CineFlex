import React from "react";
import { Container, BannerMovieSelected } from "./style";

export function Footer({url_select_movie}) {
    return (
        <Container>
            <BannerMovieSelected url_select_movie={url_select_movie}/>
            <div>
                <h2>The Batman</h2>
                <p>Sexta-feira - 15:00</p>
            </div>
        </Container>
    )
}