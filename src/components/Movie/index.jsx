import React from "react";
import { Container, Content } from "./style";

export function Movie({image_source}){
    return (
        <Container 
            image_source={image_source}
        />
    )
}