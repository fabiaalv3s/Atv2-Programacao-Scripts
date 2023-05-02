import trevo from "../../assets/trevo-megasena.png"
import "./MegaSena.css";
import useJogo from "../../hooks/useContexto";
import Header from "../Header";

function MegaSena() {
    const { megaSena, loaded } = useJogo();
    return (
        <>
        <Header currentRoute="megasena" />
            <div className="container" style={{ display: loaded ? "" : "none" }}>
            <div className="col-1">
                <div className="header-container">
                    <div className="image-header">
                        <img src={trevo} alt=""/>
                    </div>
                    <div className="megasena-logo-header">
                        <h3> MEGA-SENA </h3>
                    </div>

                </div>
                <div className="descricao">
                    Estimativa de prêmio do próximo concuncurso. Sorteio em {megaSena.dataProximoConcurso}:
                </div>
                <div className="megasena-value">
                    <h2>{loaded? megaSena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):""}</h2>
                </div>
            </div>


            <div className="megasena-circulo">
                <div className="">
                    <ul>
                        {megaSena.dezenas ? megaSena.dezenas.map((el) =>
                            <li>
                                {el}
                            </li>
                        ) : ""}
                    </ul>
                </div>
                <h1 className="vencedores">
                    {megaSena.acumulado ? "ACUMULADO" : megaSena.quantidadeGanhadores + " ganhadores"}
                </h1>

                <p className="gameDescription">
                    Concurso {megaSena.numeroDoConcurso} - {megaSena.dataPorExtenso}
                </p>
            </div>
            </div>

        </>
    )
}

export default MegaSena;