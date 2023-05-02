import { useNavigate } from 'react-router-dom';
import './Header.css'

interface Props {
    currentRoute: string
}

const Header = ({currentRoute}: Props) => {
    const history = useNavigate();

    const isActiveRoute = (route: string): boolean => {
        return currentRoute === route
    }

    function handlePath(caminho:string){
        if (caminho === 'lotofacil' ) {
            history('/lotofacil')
        }else if (caminho === 'megasena' ) {
            history('/megasena')
        }
        else {
            history('/quina')
        }
    }

    return (
        <nav className='headerNav'>
            <ul>
                <li className={isActiveRoute('lotofacil') ? "Active" : "loto"} onClick={() => handlePath('lotofacil')} >Lotofácil</li>
                <li className={isActiveRoute('megasena') ? "Active" : "mega"} onClick={() => handlePath('megasena')} >Megasena</li>
                <li className={isActiveRoute('quina') ? "Active" : "quina"} onClick={() => handlePath('quina')}>Quina</li>
            </ul>
        </nav>
    );
}

export default Header