import React from "react";
import { useLocation } from 'react-router-dom';

import { Title } from "../../components/Title";
import { ButtonForm } from "../../components/ButtonForm";
import { Header } from "../../components/Header";


import {
    Container,
    Content
} from "./style";

export function Success() {
    const location = useLocation()

    const { state } = location;
    const tickets = [...state.tickets.seats];

    let cpfFormatted = state.userData.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function (regex, argumento1, argumento2, argumento3, argumento4) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
        }
    );

    return (
        <Container>
            <Header />
            <Title text={"Pedido feito com sucesso!"} success={"success"} />
            <Content>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>{state.movie.title} <br />{state.movie.day} {state.movie.hour}</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    {
                        tickets.map(element => {
                            return (
                                <p key={element.id}>Assento {element.name}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>
                        Nome: {state.userData.userName} <br />
                        CPF: {cpfFormatted}
                    </p>
                </div>

            </Content>
            <ButtonForm
                action={"submit"}
                title="Voltar pra Home"
            />
        </Container>

    )
}