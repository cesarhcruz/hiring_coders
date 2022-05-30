import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory ();
  const [ usuario, setUsuario ] = useState(' ');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${ usuario }/repos`).then(response => console.log(response));
  }
  
  return (
       
    <>
      <input className="usuarioInput" placeholder="Usuário" value={ usuario } onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={ handlePesquisa }>Pesquisar</button>
   </>
  );
}

export default Home;



