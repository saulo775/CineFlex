import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    const [seatsAPI, setSeatsAPI] = React.useState([]);
    const { IDsessao } = useParams();

    React.useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${IDsessao}/seats`)
        promise.then((response)=>{
            const { data } = response;
            setSeatsAPI(data.seats)
        })
        promise.catch((err)=>{
            console.error(err);
        });
    },[]);

    return (
        <Container>
            <Header/>
            <Content>
                <Title text={"Selecione o(s) assento(s)"}/>
                <SeatsContainer>
                    {
                        seatsAPI.map(({id, isAvailable, name})=> {
                            return(
                                <Seat 
                                    key={id}
                                    id={id}
                                    number_seat={name}
                                    is_available={isAvailable}
                                />
                            )
                        })
                    }

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
            <Footer 
                url_select_movie
            />
        </Container>
    )
}