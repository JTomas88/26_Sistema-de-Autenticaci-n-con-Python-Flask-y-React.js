import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import Despo1 from "../../img/Despo1.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const privada = useNavigate()

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
		actions.obtenerToken(inputUSuario).then(respuestaServicio => {
			console.log(respuestaServicio);
			if (respuestaServicio.token) {
				privada ("/private") 
			}

			
		})

	}


	const backgroundStyle = {
		backgroundImage: `url(${Despo1})`,
		backgroundSize: 'contain', // Ajusta la imagen para que se vea completa sin deformarse
		// backgroundPosition: 'center',
		backgroundRepeat: 'repeat',
		minHeight: '100vh',
		width: '100%',
		overflow: 'hidden' // Asegura que no haya scroll
	};

	return (
		<div className="container-fluid" style={backgroundStyle}>
			<div className="row d-flex">
				<div className="col ">

				</div>
				<div className="col loginZone fondoForm">
					<h1 className="text-center mt-1 shadows-into-light-regular">Bienvenidos</h1>
					<div className="mt-5 ">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="email" className="text-start">Usuario (email)</label>
								<input type="text" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">Contraseña</label>
								<input type="password" className="form-control" id="password" onChange={handleChange} />
							</div>
							<button type="submit" className="btn btn-primary">Dentro</button>
						</form>

						<div className="mt-5">
							<button  type="button" className="btn btn-primary"> <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Registro</Link></button>
						</div>
						
					</div>


				</div>

			</div>

		</div>
	);
};
