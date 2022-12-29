import { useNavigate } from "react-router-dom";
import { Btn, ContainerPokemon } from "./style";
import * as MyRoute from "../../Routes/Coordinator";

export const CardPokemon = ({addToPokedex, pokemon}) => {
	const navigate = useNavigate()

	const imgPokemon = pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default
	const namePokemon = pokemon.data.name

	return (
		<ContainerPokemon>
			<h3>{namePokemon}</h3>
			<img src={imgPokemon} alt={namePokemon}/>
			<Btn>
				<button  onClick={()=>addToPokedex(pokemon)}>Capturar</button>
				<button onClick={()=>{MyRoute.goToDetailsPage(navigate, namePokemon)}}>Detalhes</button>
			</Btn>
		</ContainerPokemon>
	)
}