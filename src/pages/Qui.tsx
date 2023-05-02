import Quina from "../components/Quina";
import useContexto from "../hooks/useContexto";
import "./style.css";

function Qui() {
    const {quina} = useContexto();

    return (
        <>
            {quina.dataApuracao ? <Quina /> : <div className="carregando"> Carregando... </div>}
        </>
    );

    

}

export default Qui;