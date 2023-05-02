import MegaSena from "../components/MegaSena";
import useContexto from "../hooks/useContexto";
import "./style.css";


function Mega() {
    const { megaSena } = useContexto();

    return (
        <>
            {megaSena.dataApuracao ? <MegaSena /> : 
            <div className="carregando"> Carregando... </div>}
        </>
    );

}

export default Mega;

