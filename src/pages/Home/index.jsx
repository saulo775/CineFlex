import React from "react";
import { Movie } from "../../components/Movie";
import { Title } from "../../components/Title";

import { 
    Container,
} from "./style";

export function Home() {
    return (
        <>
            <Title text="Selecione o filme"/>   
            <Container>
                <Movie image_source={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o"}/>
                <Movie image_source={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o"}/>
                <Movie image_source={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o"}/>
                <Movie image_source={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o"}/>
                <Movie image_source={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o"}/>
            </Container>
        </>
        
    )
}