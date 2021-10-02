import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = Number(num)
    if(n < 0 || n === "") return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

// Ex #01

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])
    
// Ex #02

const [status, setStatus] = useState("Ímpar")

useEffect(function() {
    setStatus(number % 2 === 0 ? "Par" : "Ímpar")
}, [number] )

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />    
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial ===-1 ? 'Não existe' : fatorial}</span>
                </div>
                    <input type="number" className="input" 
                    number={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
