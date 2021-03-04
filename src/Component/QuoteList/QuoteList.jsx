import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import QuoteSquare from '../QuoteSquare/QuoteSquare';

const QuoteList = ({ color, selectColor }) => {


    const [list, setlist] = useState([]);

    const fetchData = async () => {
        const result = await axios(
            'http://quotes.stormconsultancy.co.uk/popular.json',
        );
        console.log(result.data)
            setlist(result.data)

    };

    useEffect(() => {

        fetchData();
    }, []);

    return (
            <QuoteSquare
                color={color}
                selectColor={selectColor}
                list={list}
            />
    )

}




export default QuoteList