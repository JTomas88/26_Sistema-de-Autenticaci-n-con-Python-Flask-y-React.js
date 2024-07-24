import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const SignUpForm = () => {

    return (
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email (Usuario) </label>
                <input type="text" class="form-control" id="email" aria-describedby="apellido2" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label"> Password </label>
                <input type="password" class="form-control" id="password" aria-describedby="apellido2" />
            </div>

            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" aria-describedby="nombre" />
            </div>
            <div class="mb-3">
                <label for="apellido1" class="form-label">Primer apellido</label>
                <input type="text" class="form-control" id="apellido1" aria-describedby="apellido1" />
            </div>
            <div class="mb-3">
                <label for="apellido2" class="form-label">Segundo apellido</label>
                <input type="text" class="form-control" id="apellido2" aria-describedby="apellido2" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}