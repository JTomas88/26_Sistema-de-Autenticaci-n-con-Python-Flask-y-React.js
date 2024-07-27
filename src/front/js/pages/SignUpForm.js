import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';




export const SignUpForm = () => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();

    const [inputUSuario, SetInputUsuario] = useState({
        email: "",
        password: ""
    })

    const handleChange = (evento) => {
        console.log('evento.target: ', evento.target.value);
        const { id, value } = evento.target;
        SetInputUsuario(copiaDelUsuario => ({
            ...copiaDelUsuario,
            [id]: value
        }))

    }


    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log('usuario', inputUSuario);
        actions.guardarUsuario(inputUSuario)
        history("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email (Usuario) </label>
                <input type="text" className="form-control" id="email" aria-describedby="apellido2" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label"> Password </label>
                <input type="password" className="form-control" id="password" aria-describedby="password" onChange={handleChange} />
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}