import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { CardPokedex } from "../../Components/CardPokedex/CardPokedex"
import { ContainerPokemons } from "./style";
import * as MyRoute from "../../Routes/Coordinator";

export const PokedexPage = () => {
	const navigate = useNavigate()

	const {functions, states} =useContext(GlobalContext)

	const componentPokedex = states.pokedex.map((pokemon) => {
    	return (
			<div key={pokemon.data.name}>
				<CardPokedex
					pokemon={pokemon}
					onClickRemove={functions.onClickRemove}
				/>
    		</div>
		)
  	})

	return (
		<div >
			<header>
				<Link to="/">
					<img src="/pokemonLogo.png" alt="Logo-Pokemon"/>
				</Link>
				<h1>POKÉDEX</h1>
				<button onClick={()=>{MyRoute.comeBack(navigate)}}>Voltar</button>
			</header>
			<ContainerPokemons>
				{states.loading && <p>Aguarde...</p>} 
				{!states.loading && states.error && <h2>Ocorreu um erro Inesperado.</h2>}
				{!states.loading && componentPokedex}
				{!states.loading && states.pokedex && states.pokedex.length <1 && (<h2>Nenhum Pokémon Capturado!</h2>)}
			</ContainerPokemons>
		</div>
	)
}