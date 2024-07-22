import React from "react";
import { Link } from "react-router-dom";

const register = () =>{
    return(
        <center>
<div className="register-box">
  <div className="register-logo">
    <Link to="../../index2.html">Formulario de Registro</Link>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Registrarse</p>
      <form action="../../index.html" method="post">

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Nombre" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Apellido" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
      
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Correo electronico" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Repite la contraseña" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                Acepto los <Link to="#">terminos</Link>
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center">
        <Link to="appporfavor\src\pages\auth\Login.js" className="btn btn-primary btn-block">
          <i className="" />
          Registrarse
        </Link>
      </div>
      <Link to ="appporfavor\src\pages\auth\Login.js" className="text-center">Ya estoy registrado</Link>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
</center>
    );
}

export default register;