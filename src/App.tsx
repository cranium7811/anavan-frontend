import React, {useState} from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightContent from './components/RightContent';
import './App.css';

function App() {

    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const getQuery = (query: string):void => {
        setQuery(query);
    }

    const getCount = (count: number):void => {
        setCount(count);
    }

    const getLoading = (loading: boolean):void => {
        setLoading(loading);
    }

    return (
        <div className="App">
            <Header query={query} count={count}/>
            <div className="grid grid-col-3 gap-4">
                <div className="col-start-1">
                    <LeftSidebar getQuery={getQuery} getCount={getCount} getLoading={getLoading}/>
                </div>
                <div className="ml-24 col-start-2 col-span-2">
                    <RightContent query={query} loading={loading}/>
                </div>
            </div>
        </div>
    );
}

export default App;
