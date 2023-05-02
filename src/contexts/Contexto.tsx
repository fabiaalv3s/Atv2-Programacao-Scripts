import { createContext, useEffect, useState } from "react";
import { Jogo, Props } from "../types";
import { GetJogo } from "../services/JogoService";


const Contexto = createContext<Props>({} as Props);


function Provider({ children }: any) {
    
    const [megaSena, setMegaSena] = useState({} as Jogo);
    const [lotoFacil, setLotoFacil] = useState({} as Jogo);
    const [quina, setQuina] = useState({} as Jogo);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
            GetJogo().then((r) => {
                console.log(r)
                setLotoFacil(r.lotofacil)
                setMegaSena(r.megaSena)
                setQuina(r.quina)
                setLoaded(true)
            });
    }, []);

    return (
        <Contexto.Provider value={{ megaSena, lotoFacil, quina, loaded, setMegaSena, setLotoFacil, setLoaded, setQuina }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

