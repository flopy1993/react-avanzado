import React, { Fragment, useContext} from "react";
import {Context} from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";


export const NotRegisteredUser = () => {
  //const Context = useContext(Context)
  const {activateAuth} = useContext(Context)
      return (
        <Fragment>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(
                 // response => {console.log(response)
                 ({data}) => {
                   const {signup} = data
                
                    activateAuth(signup)}
                )
                .catch(err => {
                  // Will not execute
                  console.log('caught', err.message);
                })
              };
              const errorMsg = error && "Hay un problema";
              return (
                <UserForm
                  error={errorMsg}
                  disabled={loading}
                  title="Registrarse"
                  onSubmit={onSubmit}
                />
              );
            }}
          </RegisterMutation>
            <LoginMutation>
              {
                (login, {error, loading, data}) =>{
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password };
                    const variables = { input };
                  
                    login({ variables }).then(({data})=>
                    {
                    const {login} = data
                    
                    activateAuth(login)
                  }
                     
                      )
                    
                    }
                 
                    const errorMsg = error && "Hay un problema";
                return <UserForm disable={loading} error={errorMsg} title="Iniciar sesión" onSubmit={onSubmit} />
              }
              }
            </LoginMutation>

          
        </Fragment>
      );
    }

