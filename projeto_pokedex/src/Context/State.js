import axios from 'axios';
import { useEffect, useState } from 'react';
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from '../Constants/BASE_URL';
import swal from 'sweetalert';

export const State = ({children}) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

	useEffect(() => {
		const details = []
		for (let i=1; i<31; i++) {
		    details.push(`${BASE_URL}${i}/`)
		}

        setLoading(true)
		axios.all(details.map((deta) => axios.get(deta)))
		.then((res) => {
            setLoading(false)
            setPokemons(res)
        })
      	.catch((err) => {
            setLoading(false)
            setError(err)
            console.log(err)
        })

  	}, [])

    const addToPokedex = (pokemon) => {   
        setPokedex([...pokedex, pokemon])

        const newListPokemons = pokemons.filter((poke) => {
            return poke.data.name !== pokemon.data.name
        })
        setPokemons(newListPokemons)

        swal({
            title: "Sucesso!",
            text: "Pokémon Capturado!",
            icon: "success",
            button: "Ok!",
        })
    }

    const onClickRemove = (pokemon) => {
        setPokemons([...pokemons, pokemon])

        const newListPokedex = pokedex.filter((poke) => {
            return poke.data.name !== pokemon.data.name
        })
        setPokedex(newListPokedex)

        swal({
            text: "Pokémon Removido da Pokédex!",
            icon: "warning",
            button: "Ok!",
        })
    }

    const states = {pokedex, pokemons, loading, error}
    const setters = {setPokedex, setPokemons, setLoading, setError}
    const functions = {addToPokedex, onClickRemove}

    return (
        <GlobalContext.Provider value={{states, setters, functions}}>
            {children}
        </GlobalContext.Provider>
    )
}