import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPokemon } from "..//..//Components/CardPokemon/CardPokemon";
import { GlobalContext } from "../../Context/GlobalContext";
import { ContainerPokemons } from "./style";
import * as MyRoute from "../../Routes/Coordinator";

export const HomePage = () => {
	const navigate = useNavigate()

	const {functions, states} = useContext(GlobalContext)

	const componentPokemon = states.pokemons.map((pokemon) => {
    	return (
			<div key={pokemon.data.name}>
				<CardPokemon 
					pokemon={pokemon}
					addToPokedex={functions.addToPokedex}
				/>
    		</div>
		)
  	})

	return (
		<div>
			<header>
				<Link to="/">
					<img src="/pokemonLogo.png" alt="Logo-Pokemon"/>
				</Link>
				<h1>LISTA DE POKÉMONS</h1>	
				<button onClick={()=>{MyRoute.goToPokedexPage(navigate)}}>Pokédex</button>
			</header>
    		<ContainerPokemons>
				{states.loading && <p> Vasco...</p>} 
				{!states.loading && states.error && <h2> Ocorreu um erro Inesperado.</h2>}
				{!states.loading && componentPokemon}
    		</ContainerPokemons>
		</div>
	)
}