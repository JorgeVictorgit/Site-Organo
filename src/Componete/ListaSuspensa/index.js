import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoDigitar = (evento)=>{
        props.aoAltera(evento.target.value)

    }
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitar} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}

            </select>
        </div>
    )

}
export default ListaSuspensa