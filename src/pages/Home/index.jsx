import React from "react";
import axios from "axios";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Title } from "../../components/Title";

import { 
    Container,
} from "./style";

export function Home() {
    const [movies, setMovies] = React.useState([]);


    React.useEffect(()=>{
        const response = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        response.then(({data})=>{
            setMovies(data);
        }).catch((error)=>{
            console.log(error)
        });
    },[]);
    
    return (
        <>
            <Header/>
            <Title text="Selecione o filme"/>   
            <Container>
                {
                    movies.map(({id,posterURL}) => {
                        return(
                            <Movie 
                                key={id}
                                image_source={posterURL}
                            />
                        )
                    })
                    
                }
            </Container>
        </>
        
    )
}