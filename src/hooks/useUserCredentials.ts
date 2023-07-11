import { useState } from "react";

function parseCredentials(credentialString: string) : Credentials{
    return JSON.parse(credentialString);
}

function serializeCredentials(credentials: Credentials){
    return JSON.stringify(credentials);
}

interface Credentials {
    id: number;
    role: 'anonymous' | 'user' | 'admin';
    isLoggedIn: boolean;
}

const unLoggedCredentials: Credentials = {id:0, role:'anonymous', isLoggedIn:false};  // unlogged credentials

export default function useUserCredentials(): [Credentials, (credentials: Credentials) => boolean] {

    // * 1. We try to retrieve existing credentials from session storage

    let serializedCredentials = sessionStorage.getItem('credentials');
    let currentCredentials: Credentials = unLoggedCredentials;

    // * 1.1 If there are credentials stored, we parse those
    if(serializedCredentials !== null) {
        currentCredentials = parseCredentials(serializedCredentials);
    } else { // * 1.2 Else we assign default anonymous credentials
        currentCredentials = unLoggedCredentials;
    }
    
    // * 2. Setup a state for the credentials
    const [userCredentials, setUserCredentials] = useState(currentCredentials);

    // * 3. Wrap the set function with some logic for writing to session storage
    const addCredentials = (credentials: Credentials): boolean => {

        // let creds = {id:userID, role:userRole, isLoggedIn:isUserLoggedIn};

        try {
            sessionStorage.setItem('credentials', serializeCredentials(credentials));
            setUserCredentials(credentials);
            return true;
        } catch (err){
            console.error('Error Storaging credentials: ', err);
        }
        return false;
    }

    // 4. Return both the state variable and the set function
    return [userCredentials, addCredentials];

    
}