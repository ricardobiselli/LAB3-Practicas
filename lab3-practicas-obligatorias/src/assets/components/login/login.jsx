import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState('');
  const [usernamePreview, setUsernamePreview] = useState('');
  console.log(username);

  const handleInput = (event) => {
    setUsername(event.target.value);
    setUsernamePreview(event.target.value);
    

    if (event.target.value.includes('o') || event.target.value.includes('O')) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const registerUser = () => {
    if (username === '' || username.toLowerCase().includes('o')) {
      alert("Usuario inválido para registrarse");
      return;
    }

    alert("¡Usuario registrado correctamente!");
  };

  return (
    <div >
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title>Registro de Usuario</Card.Title>
          <input
            type="text"
            value={username}
            onChange={handleInput} 
            placeholder="Nombre de usuario"
          />
          <Button
            onClick={registerUser}
          >
            Registrarse
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
