import React from "react";

import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { Seat } from "../../components/Seat";
import { ButtonForm } from "../../components/ButtonForm";

import {
    Container,
    Content,
    SeatsContainer,
    Legend,
    ClientData,
} from "./style";

export function Seats() {
    return (
        <Container>
            <Header/>
            <Content>
                <Title text={"Selecione o(s) assento(s)"}/>
                <SeatsContainer>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={15}/>
                    <Seat number_seat={31}/>
                    <Seat number_seat={55}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                    <Seat number_seat={1}/>
                </SeatsContainer>

                <Legend>
                    <li>
                        Selecionado
                    </li>
                    <li>
                        Disponível
                    </li>
                    <li>
                        Indisponível
                    </li>
                </Legend>

                <ClientData>
                    <div>
                        <label htmlFor="">Nome do comprador:</label>
                        <input type="text" placeholder="Digite seu nome..."/>
                    </div>
                    <div>
                        <label htmlFor="">CPF do comprador:</label>
                        <input type="text" placeholder="Digite seu CPF..."/>
                    </div>

                    <ButtonForm title={"Reservar Assentos"}/>
                </ClientData>
            </Content>
            <Footer url_select_movie={"https://m.media-amazon.com/images/I/81ugxFdBZBL._AC_SY550_.jpg"}/>
        </Container>
    )
}