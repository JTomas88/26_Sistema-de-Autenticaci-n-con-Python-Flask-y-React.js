import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../component/navbar";

export const Private = () => {

    return(
        <div>
            <Navbar />
            <h1>CONTENIDO PRIVADO: LOGADO CORRECTAMENTE</h1>

        </div>
    )
}