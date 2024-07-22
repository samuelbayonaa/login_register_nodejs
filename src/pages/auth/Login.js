import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <center>
      <div className="login-box">
      <div className="login-logo">
        <Link to="../../index2.html">Inicar Sesión</Link>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Inicia sesión para comenzar</p>
          <form action="../../index3.html" method="post">
          
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Nombre completo" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
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
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Recordarme
                  </label>
                </div>
              </div>
            </div>
          </form>
          <br></br>
            <Link to="#" className="btn btn-block btn-primary">
              <i className=""/> Iniciar sesión 
            </Link>
          </div>
          <p className="mb-1">
            <Link to="forgot-password.html">Olvide mi contraseña</Link>
          </p>
          <p className="mb-0">
            <Link to="register.html" className="text-center">Registrate aqui</Link>
          </p>
          <br></br>
        </div>
    </div>
    </center>

  );
}

export default Login;
