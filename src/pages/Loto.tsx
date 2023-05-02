import LotoFacil from "../components/LotoFacil";
import useContexto from "../hooks/useContexto";
import "./style.css";

function Loto() {
    const { lotoFacil} = useContexto();

    return (
        <>
            {lotoFacil.dataApuracao ? <LotoFacil /> : <div className="carregando"> Carregando... </div>}
        </>
    );
   

}

export default Loto;