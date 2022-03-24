import React from "react";
import { Container } from "./style";

export function Movie({image_source}){
    return (
        <Container 
            image_source={image_source}
        />
    )
}