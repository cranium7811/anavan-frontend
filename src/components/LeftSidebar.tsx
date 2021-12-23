import React, {useState} from 'react';
import Avatar from './Avatar';
import ClipLoader from "react-spinners/ClipLoader";

interface LeftProps {
    getQuery: (arg: string) => void;
    getCount: (arg: number) => void;
    getLoading: (arg: boolean) => void;
}

export default function LeftSidebar({getQuery, getCount, getLoading}: LeftProps) {

    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);
    getQuery(query);
    getCount(count);
    getLoading(loading);

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        setTimeout(() => {
            setQuery(event.target.value);
            setLoading(false);
        }, 2000);
    }

    const handleClick = () => {
        if(query !== '') {
            setCount(count+1);
        }
        setQuery('');
    }

    return (
        <div className="pl-24 pt-24 max-w-md">
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">Enter username</span>
                    <input type="text" 
                            className="mt-4 p-4 block w-full h-12 rounded-md border-2 shadow-sm focus:outline-none" 
                            placeholder="For eg. 7811"
                            onChange={handleEvent}/>
                </label>
                <div className="pt-20">
                    {loading? <ClipLoader/> : <Avatar query={query}/>}
                </div>
                <div className="pt-24">
                    <button className="rounded-lg bg-yellow-300 border-2 w-full h-20 border-gray-400 font-bold shadow-lg"
                            onClick={handleClick}>Generate Contact</button>
                </div>
            </div>
        </div>
    )
}
