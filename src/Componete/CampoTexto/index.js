import './CampoTexto.css'
const CampoTexto = (props)=>{

    const aoDigitar = (evento)=>{
        props.aoAltera(evento.target.value)

    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value = {props.valor} onChange ={aoDigitar} required={props.obrigatorio} placeholder = {`Digite seu ${props.label}...`}/>
        </div>
    )

}
export default CampoTexto