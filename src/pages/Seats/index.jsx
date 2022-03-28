import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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

const CPF_REGEX = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

export function Seats() {
    const [dataAPI, setDataAPI] = React.useState([]);
    const [seatsAPI, setSeatsAPI] = React.useState([]);
    const { IDsessao } = useParams();
    const [seats, setSeats] = React.useState([]);
    const [cpf, setCpf] = React.useState('');
    const [userName, setUserName] = React.useState('');


    const navigate = useNavigate();

    function handleGetSeatsSelecteds(name, id) {
        const seatNumber = parseInt(name);
        let newSeats = [...seats];
        let index = -1;

        for (let i = 0; i < newSeats.length; i++) {
            if (newSeats[i].name === seatNumber) {
                index = i;
            }    
        }

        if (index > -1) {
            newSeats.splice(index, 1);
        }else {
            newSeats.push({name:seatNumber, id:id});
        }
        setSeats(newSeats);
        console.log(newSeats)
    }

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

    function handleSendData(event) {
        event.preventDefault();
        let ids = seats.map((element)=>{
            return element.id;
        });

        let body = {
            ids: ids,
            name: `${userName}`,
            cpf: `${cpf}`
        }
        console.log(body.ids)

        if (body.ids.length === 0) {
            alert("Escolha um assento!");
        }else if(!CPF_REGEX.test(body.cpf) || body.name.length === 0){
            alert("Preencha seus dados corretamente!");
        }else{
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);
    
            promise.then((response)=>{
                console.log(response)
                const data = fillStateNavigate();
                navigate("/sucesso", {state: data});
            });
    
            promise.catch((err)=>{
                console.log(err);
            });
        }

    }

    function fillStateNavigate(){
        const data = {
            movie: {
                title: `${dataAPI.movie.title}`,
                day: `${dataAPI.day.weekday}`,
                hour: `${dataAPI.day.date}`
            },
            tickets: {
                seats: `${seats}`
            },
            userData: {
                cpf: `${cpf}`,
                userName: `${userName}`,
            }
        }
        return data;
    }

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
                                            handleGetSeatsSelecteds(name, id);
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

                <ClientData onSubmit={handleSendData}>
                    <div>
                        <label htmlFor="super">Nome do comprador:</label>
                        <input 
                            id="userName" 
                            type="text"
                            placeholder="Digite seu nome..."
                            onChange={({target})=>{
                                setUserName(target.value);
                            }}
                            value={userName}
                        />
                    </div>

                    <div>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input 
                            id="cpf" 
                            type="number"
                            placeholder="Digite seu CPF..."
                            onChange={({target})=>{
                                setCpf(target.value);
                            }}
                            value={cpf}
                        />
                    </div>
                    

                    <ButtonForm title={"Reservar Assentos"} type="submit"/>
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