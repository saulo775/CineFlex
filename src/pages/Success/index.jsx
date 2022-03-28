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

    console.log(location.state)

    return(
        <Container>
            <Header/>
            <Title text={"Pedido feito com sucesso!"} success={"success"}/>
            <Content>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>Enola Holmes <br/>24/06/2021 15:00</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    <p>ingresso 1</p>
                    <p>ingresso 2</p>
                    <p>ingresso 3</p>
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>
                        Nome: João da Silva Sauro <br/>
                        CPF: 123.456.789-10
                    </p>
                </div>

            </Content>
            <ButtonForm title="Voltar pra Home"/>
        </Container>
        
    )
}