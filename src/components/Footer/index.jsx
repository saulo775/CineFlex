import React from "react";
import { Container, BannerMovieSelected } from "./style";

export function Footer({ url_select_movie, title_movie, session_day, session_hour }) {
    return (
        <Container>
            <BannerMovieSelected url_select_movie={url_select_movie} />
            <section>
                <h2>{title_movie}</h2>
                <p>{session_day} {session_hour}</p>
            </section>
        </Container>
    )
}