import React from "react";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";


import {
    Container,
    DateSession, 
    Day, 
    Hour
} from "./style";

export function Session() {
    return(
        <>
            <Title text={"Selecione o horário"}/>
            <Container>
                <DateSession>
                    <Day>Quinta-feira - 24/06/2021</Day>
                    <div>
                        <Hour>15:00</Hour>
                        <Hour>19:00</Hour>
                    </div>
                </DateSession>

                <DateSession>
                    <Day>Quinta-feira - 24/06/2021</Day>
                    <div>
                        <Hour>15:00</Hour>
                        <Hour>19:00</Hour>
                    </div>
                </DateSession>
            </Container>
            <Footer url_select_movie={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o"}/>
        </>
    )
}