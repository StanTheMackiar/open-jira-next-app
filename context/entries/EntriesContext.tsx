import { createContext } from 'react';
import { Entry } from '../../interfaces';
import { DeleteImageData } from '../../pages/api/storage/image/[name]';


interface ContextProps {
    entries: Entry[];
    error: boolean,
    loader: boolean;

    addNewEntry: (description: string, imageUrl?: string) => Promise<Entry | undefined>
    deleteEntry: (entry: Entry) => Promise<void>;
    deleteImage: (id: string) => Promise<Entry | undefined>
    updateEntry: (entry: Entry, showSnackbar?: boolean) => Promise<Entry | undefined>,
    uploadImage: (image: File, userId: String) => Promise<string>,
}


export const  EntriesContext = createContext({} as ContextProps);



