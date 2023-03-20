import Colaborador from '../Colaborador'

import './Time.css'

const Time= (props)=>{
    return(
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor:props.corsecundaria}}>
            <h3 style={{borderColor:props.corprimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} corfundo={props.corprimaria} nome={colaborador.nome} img={colaborador.imagem} cargo={colaborador.cargo}/>)}

            </div>
            
        </section>

    )
}

export default Time