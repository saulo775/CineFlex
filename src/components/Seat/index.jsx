import React from "react";
import { SeatAvailable, SeatNotAvailable } from "./style";

export function Seat({id, number_seat, is_available}) {
    

    if (is_available) {
        return (
            <SeatAvailable>{number_seat}</SeatAvailable>
        )
    }else{
        return(
            <SeatNotAvailable>{number_seat}</SeatNotAvailable>
        )
    }

}