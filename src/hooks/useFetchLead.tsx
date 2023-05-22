import { useEffect, useState } from 'react'
import { LeadsData } from '../store/MyContext';
import useFetch from './useFetch';
// import CryptoJS from 'crypto-js';

interface State<T> {
    data?: T
    error?: Error
}

// eslint-disable-next-line
const options = {
    // eslint-disable-next-line
    method: 'GET',
}

// const crypt = (salt: string, text: string) => {
//     const textToChars = (text: string) => text.split("").map((c) => c.charCodeAt(0));
//     const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
//     const applySaltToChar = (code: any) => textToChars(salt).reduce((a, b) => a ^ b, code);

//     return text
//         .split("")
//         .map(textToChars)
//         .map(applySaltToChar)
//         .map(byteHex)
//         .join("");
// };

const decrypt = (salt: any, encoded: any) => {
    const textToChars = (text: any) => text.split("").map((c: any) => c.charCodeAt(0));
    const applySaltToChar = (code: any) => textToChars(salt).reduce((a: any, b: any) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex: any) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode: any) => String.fromCharCode(charCode))
        .join("");
};

const useFetchLead = (lead_id: string) => {
    // encrypting
    // const encrypted_text = crypt("salt", "put string here to encrypt"); 
    // console.log('ec: ', encrypted_text);
    // // decrypting
    // const access_token = decrypt("salt", "4f4b4b4d403b5a504b7f607d79484b46683265654e58427d453e6b6f5352705e686e7f7942455949667c726148525049656b4e3f4465454d6472457c3c7f6c626d3a50493c5b476c3c735b5048437f63385c4d4968797b6d5f3b3d7f4567325e393f5a7349493c614961337e6732683e707c7a33527c673b4e7d594e6852337d73654b3b6039425a32476b693b3a5f3f3c635d70793865384c386161606b73504b685048477c5f497e5c4144583d615c7d6b7b3b7247585e617b796e415867683e443a5d395c443e463d504b7c5843404c69704c5f653b4f7d6c5a457860704c43335d4d4c395e4248467d4472494660396c676f3d464d66"); // -> Hello
    const url = `https://graph.facebook.com/v16.0/${lead_id}?access_token=${access_token}`
    const [leadData, setLeadData] = useState<LeadsData | null>(null);
    const { data, error } = useFetch<LeadsData>(url, options)

    useEffect(() => {
        if (data) {
            setLeadData(data);
        } else {
            setLeadData(null);
        }
        if (error) {
            console.error(error);
        }
    }, [data, error]);

    return [leadData];
}

export default useFetchLead;
