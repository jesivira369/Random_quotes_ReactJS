import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { randInt } from '../../Funciones/Numeros'
import { Button, Icon } from 'semantic-ui-react'



const StyledSquare = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255,255,255, 0.4);
    width: 60%;
    height: 60%;
    border-radius: 10px;
`

const QuoteText = styled.h1`
    justify-self: flex-start;
    color: #555;
    font-style: italic;
`

const QuoteAuthor = styled.h3`
    justify-self: flex-end;
    color: #555;
    font-style: bold;
    justify-content: flex-end;
    flex-direction: row;

`

const StyledButton = styled.button`
    background-color: ${props => props.bgColor};
    border-radius: 6px;
    border-radius: 6px;
`

const TwitterButton = styled.button`

    background: #00BCD4;
    border-radius: 6px;
    border-radius: 6px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: flex-end; 
    justify-content: space-between;
`

const QuoteSquare = ({ color, selectColor, list }) => {

    const [quotes, setQuotes] = useState([])

    const [currentMessage, setCurrentMessage] = useState({ quote: '', character: '' })

    const selectQuote = () => {

        setCurrentMessage(list[randInt(0, list.length)])
        selectColor()
    }

    useEffect(() => {


        if (list.length > 0) {
            selectQuote()
        }


    }, [list])


    const Twitter = "https://twitter.com/intent/tweet?text=";

    let QuoteTwitter = `"${currentMessage.quote}"    ${currentMessage.author}`

  
    
    



    return (
        <StyledSquare>
            <QuoteText>"{currentMessage.quote}"</QuoteText>
            <QuoteAuthor>{currentMessage.author}</QuoteAuthor>
            <Row>
                    <a className="tweet-button" href={Twitter + QuoteTwitter}
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    >
                    <Button color='twitter'>
                        <Icon name='twitter' /> Twitt
                    </Button>
                    </a>
                    <Button onClick={selectQuote} color={color}>
                    Cambiar quote
                    </Button>
            </Row>
        </StyledSquare>

    )
}

export default QuoteSquare