import * as C from './styles'
import { deleteItem } from '../../services/photos'

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ( {url, name}: Props) => {

    return(

        <C.Container>
            <img src={url} alt={name}/>
            {name}
            <button onClick={deleteItem}>💣</button>
        </C.Container>
    )
}