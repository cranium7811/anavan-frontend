import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface AvatarProps {
    query: string;
}

export default function Avatar({ query }: AvatarProps) {

    let url = query == '' ? "" :'https://avatars.dicebear.com/api/adventurer/' + query + '.svg';

    return (
        <img src={url}/>
    )
}
