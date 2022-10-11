import { NextPageContext } from 'next';
import React, {useEffect, useState} from 'react'

type PalestraProps = {
    frase: string;
    autor: string;

}
async function getFrase() {
    const res = await fetch('https://type.fit/api/quotes' );
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    
    return {
        frase, autor
    }

export default function Palestra(props:PalestraProps){
    const [frase, setFrase] = useState<string | undefined>(props.frase)
    const [autor, setAutor] = useState<string | undefined>(props.autor)
 
    useEffect(()=>){
        getFrase().then((data)=>console.log(`executou ${contador} vez`);};
        contador++;
    },[contador]);
        const retorno = getFrase();
            
        }
       

            return{
                frase, autor}

            }
         }
        
    }
 
    return (
        <>
            <h1>{frase?frase:"Seja muito bem vindo!"}</h1>
         {autor && <h2>{autor}</h2>}
        <button onClick={(e)=>setAutor("Sarah Barreto")}>Mudar Autor</button>
        <button onClick={(e)=>setFrase("Quem tem mais, tem dez!")}>Mudar Frase</button>
        
        
        </>
        )
    

Palestra.getInitialProps = async (ctx: NextPageContext) => {
 
    const res = await fetch('https://type.fit/api/quotes' );
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase,
        autor
    }
}

       

