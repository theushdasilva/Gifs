import style from '../styles/body.module.css'; 

export default function menu(props){
    return(
        <>
        <div className={style.titulo}>
            {props.titulo}
        </div>
        </>
    );
}