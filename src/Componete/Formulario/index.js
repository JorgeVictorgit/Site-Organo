import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botão';
import { useState } from 'react';

const Formulario = (props) => {
    

    const [nome, setnome] = useState('')
    const [cargo, setcargo] = useState('')
    const [imagem, setimagem] = useState('')
    const [listasupensa, setlistasupensa] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            listasupensa
        })
        setnome('')
        setcargo('')
        setimagem('')
        setlistasupensa('')
    }

    return (
        <section className="formulario">
            
            <form onSubmit={aoSalvar}>
                <h1>Digite o nome do Colaborador</h1>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    valor = {nome}
                    aoAltera = {valor => setnome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    valor = {cargo}
                    aoAltera = {valor => setcargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    valor = {imagem}
                    aoAltera = {valor => setimagem(valor)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={props.times}
                    valor ={listasupensa}
                    aoAltera = {valor =>setlistasupensa(valor)}
                />
                <Botao label="criar card" />
            </form>
        </section>

    )
}
export default Formulario