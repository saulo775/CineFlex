import React from "react";
import { Container, BannerMovieSelected } from "./style";

export function Footer({url_select_movie, title, sessionDay, sessionHour}) {
    return (
        <Container>
            <BannerMovieSelected url_select_movie={url_select_movie}/>
            <section>
                <h2>{title}</h2>
                <p>{sessionDay} {sessionHour}</p>
            </section>
        </Container>
    )
}