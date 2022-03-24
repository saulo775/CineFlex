import React from "react";
import { Container } from "./style";

export function Title(props) {
    return (
        <Container>
            <p className={`destak ${props.success}`}>{props.text}</p>
        </Container>
    )
}