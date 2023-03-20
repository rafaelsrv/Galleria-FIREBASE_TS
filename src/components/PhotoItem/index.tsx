import * as C from './styles'
import {useState} from 'react'
import { deleteItem } from '../../services/photos'



type Props = {
    url: string;
    name: string;

}

export const PhotoItem = ( {url, name}: Props) => {

    const [urlRef, seturlRef] = useState('')
    

    return(

        <C.Container>
            <img src={url} alt={name}/>
            {name}
            <button onClick= {()=>{
                seturlRef(name);
                deleteItem(urlRef);
                
                }} >💣</button>
        </C.Container>
    )
}