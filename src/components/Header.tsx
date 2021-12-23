import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface HeaderProps {
    query: string;
    count: number;
}

export default function Header({query, count}: HeaderProps) {

    let arr = [];
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?seed=${query}`)
            .then(res => {
                if(count !== 0) {
                    setData(res.data.results[0].name);
                    arr.push(data);
                }
            })
    }, [count])


    return (
        <div className="bg-black text-white pb-14">
            <p className="pt-12 font-bold text-3xl">Generated Contacts: {count}</p>
        </div>
    )
}
