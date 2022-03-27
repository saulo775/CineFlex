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
    const [dataAPI, setDataAPI] = React.useState([]);
    const [seatsAPI, setSeatsAPI] = React.useState([]);
    const { IDsessao } = useParams();

    const [assentos, setAssentos] = React.useState([]);
    

    function handleGetSeatsSelecteds(name) {
        const seatNumber = parseInt(name);
        let newSeats = [...assentos];
        
        let index = assentos.indexOf(seatNumber);

        if (index > -1) {
            newSeats.splice(index, 1);
        }else {
            newSeats.push(seatNumber);
        }
        setAssentos(newSeats);
    }
    console.log(assentos)

    React.useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${IDsessao}/seats`)
        promise.then((response)=>{
            const { data } = response;
            setDataAPI(data);
            setSeatsAPI(data.seats)
        })
        promise.catch((err)=>{
            console.error(err);
        });
    },[]);

    return Object.values(dataAPI).length > 0 ? (
        <Container>
            <Header/>
            <Content>
                <Title text={"Selecione o(s) assento(s)"}/>
                <SeatsContainer>
                    {
                        seatsAPI.map(({id, isAvailable, name})=> {
                            return(
                                <div 
                                    onClick={()=>{
                                        if (isAvailable) {
                                            handleGetSeatsSelecteds(name);
                                        }
                                    }}
                                    key={id}    
                                >
                                    
                                    <Seat 
                                        id={id}
                                        number_seat={name}
                                        is_available={isAvailable}
                                    />
                                </div>
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
                url_select_movie={dataAPI.movie.posterURL}
                title_movie={dataAPI.movie.title}
                session_day={dataAPI.day.weekday}
                session_hour={dataAPI.day.date}
            />
        </Container>
    ) : <p>carregando...</p>
}