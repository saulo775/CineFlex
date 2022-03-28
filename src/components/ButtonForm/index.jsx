import React from "react";
import { useNavigate } from "react-router-dom"
import { Container } from "./style";

export function ButtonForm({title, action}) {
    const navigate = useNavigate()
    
    function bola() {
        if (action) {
            navigate("/");
        }
    }

    return (
        <Container onClick={bola}>{title}</Container>
    )
}