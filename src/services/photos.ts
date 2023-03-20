import { Photo } from "../types/Photo";
import {v4 as createId} from 'uuid'
import { storage} from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject, getStorage} from 'firebase/storage'


export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}

export const insert = async (file: File) =>{
    if( ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) ) {

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`)

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return {
            name: upload.ref.name,
            url: photoUrl 
        } as Photo;

    } else{
        return new Error('Tipo de arquivo')
    }
}




export const deleteItem = async (refname : string)=>{

    const storage = getStorage();
    const desertRef = ref(storage, `images/${refname}`);
    console.log(refname)

    // Delete the file
await deleteObject(desertRef).then(() => {
    'File deleted successfully'
  }).catch((error) => {
    'Uh-oh, an error occurred!'
  });
  
 

    
}