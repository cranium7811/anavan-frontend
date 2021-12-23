import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

interface RightProps {
    query: string;
    loading: boolean;
}

export default function RightContent({query, loading}: RightProps) {

    let url = query == '' ? "" :'https://avatars.dicebear.com/api/adventurer/' + query + '.svg?size=150';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?seed=${query}`)
            .then(res => {
                setFirstName(res.data.results[0].name.first);
                setLastName(res.data.results[0].name.last);
                setEmail(res.data.results[0].email);
            })
    }, [query])

    return (
        <div className="pl-36 pt-36 max-w-md">
            <div className="pl-10 pt-32 grid grid-cols-1 gap-4 text-lg">
                { loading ? <ClipLoader size={250}/>  :
                    <>
                        <p className="text-3xl font-bold">{query}</p>
                        <div className="pt-4">
                            <img className="ml-16" src={url} alt="" />
                        </div>
                        <div className="pt-4">
                            <p>{query == '' ? '' : firstName}</p>
                        </div>
                        <div className="pt-4">
                            <p>{query == '' ? '' : lastName}</p>
                        </div>
                        <div className="pt-4">
                            <p>{query == '' ? '' : email}</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
