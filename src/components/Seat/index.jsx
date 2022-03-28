import React from "react";
import { SeatAvailable, SeatNotAvailable, SeatSelected } from "./style";

export function Seat({ number_seat, is_available }) {
    const [status, setStatus] = React.useState(is_available);

    function handleSelectSeat() {
        setStatus(!status);
    }

    if (is_available) {
        if (status) {
            return (
                <SeatAvailable
                    onClick={handleSelectSeat}
                >
                    {number_seat}
                </SeatAvailable>
            )
        } else {
            return (
                <SeatSelected
                    onClick={handleSelectSeat}
                >
                    {number_seat}
                </SeatSelected>
            )
        }
    } else {
        return (
            <SeatNotAvailable
                onClick={() => {
                    alert("Esse assento não está disponível");
                }}
            >{number_seat}</SeatNotAvailable>
        )
    }

}