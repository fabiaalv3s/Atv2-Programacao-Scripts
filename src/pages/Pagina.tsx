import LoadingPage from "../components/LoadingPage";
import LotoFacil from "../components/LotoFacil";
import MegaSena from "../components/MegaSena";
import Quina from "../components/Quina";

function Pagina() {
    return (
        <>
            <MegaSena />
            <LotoFacil />
            <Quina />
            <LoadingPage />
            
        </>
    )
}
export default Pagina;