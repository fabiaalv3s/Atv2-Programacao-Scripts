import { Contexto } from "../../contexts";
import { useContext } from "react";
import "./LoadingPage.css";

function LoadingPage(): JSX.Element {
    const {loaded} = useContext(Contexto)
    
    return (
        <>

            <div className="loadingPage" style={{ display: loaded ? "none" : "" }}>
                <div className="loading">
                    <h1>
                        Carregando...
                    </h1>
                </div>
            </div>
          <hr style={{ display: loaded ? "" : "none" }} />
        </>
    )
}
export default LoadingPage;