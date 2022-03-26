import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";

import {
    Container, Content, DateSession, Day, Hour,
} from "./style";


export function Session() {
    const [sessions, setSessions] = React.useState([]);
    const [days, setDays] = React.useState([]);
    const {IDmovie} = useParams();

    React.useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${IDmovie}/showtimes`);
        promise.then((response)=>{
            setSessions(response.data);
            setDays(response.data.days);
        })
        promise.catch((err)=>{
            console.log(err);
        });
    },[IDmovie]);

    return (
        <Container>
                <Header/>
                <Title text={"Selecione o horário"}/>
                <Content>
                    {
                        days.map((element) => {
                            return (
                                <DateSession key={element.id}>
                                    <Day>{element.date}</Day>
                                    <div>
                                        {element.showtimes.map((e)=>{
                                            return(
                                                <Hour key={e.id}>{e.name}</Hour>
                                            )
                                        })}
                                    </div>
                                </DateSession>
                            )
                        })
                    } 
                </Content>
                <Footer 
                    url_select_movie={sessions.posterURL} 
                    sessionDay={sessions.title}
                />
        </Container>
    )
}