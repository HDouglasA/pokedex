import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Img, Statics, Type, Moves, ContainerDetails } from "./style";
import { BASE_URL } from '../../Constants/BASE_URL';
import { Footer } from '../../Components/Footer/Footer';
import * as MyRoute from "../../Routes/Coordinator";

export const DetailsPage= () => {
	const navigate = useNavigate()

	const {namePokemon} = useParams()

    const [pokemonDetails, setPokemonDetails] = useState({})
	const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
		setLoading(true)
		axios.get(`${BASE_URL}${namePokemon}`)
		.then((response) => {
			setLoading(false)
			setPokemonDetails(response.data)
		})
		.catch((err) => {
			setLoading(false)
			setError(err)
			console.log(err)
		})
    }, [namePokemon])

	const frontalImage = pokemonDetails.sprites && pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.front_default
	const  backImage = pokemonDetails.sprites && pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.back_default

	const types = pokemonDetails.types && pokemonDetails.types.map((tp) => {
		return (
			<p key={tp.type.name}>
				{tp.type.name}
			</p>
		)
	})

	const moves = pokemonDetails.moves && pokemonDetails.moves.map((mv, i) => {
		return  (
			i <7 && <p key={mv.move.name}> {mv.move.name} </p> 
		)
	})

	return (
    	<div>
			<header>
				<button onClick={()=>{MyRoute.comeBack(navigate)}}>Voltar</button>
				<h1>{namePokemon.toUpperCase()}</h1>
        		<button onClick={()=>{MyRoute.goToPokedexPage(navigate)}}>Pokédex</button>
			</header>
			<ContainerDetails>
				<section>
					<Img>
						{loading && <p> Aguarrde...</p>}
						{!loading && error && <p> Ocorreu um erro Inesperado.</p>}
						{!loading && <img src={frontalImage} alt="Imagem Frontal"/>}
					</Img>
					<Img>
						{loading && <p> Aguarrde...</p>}
						{!loading && error && <p>Ocorreu um erro Inesperado.</p>}
						{!loading &&  <img src={backImage} alt="Imagem de Costas"/>}
					</Img>
				</section>
				<Statics>
						<h2>Statísticas:</h2>
						<section>
							<p>Pontos de Vida: {pokemonDetails.stats && pokemonDetails.stats[0].base_stat}</p>
							<p>Ataque: {pokemonDetails.stats && pokemonDetails.stats[1].base_stat}</p>
							<p>Defesa: {pokemonDetails.stats && pokemonDetails.stats[2].base_stat}</p>
							<p>Ataque Especial: {pokemonDetails.stats && pokemonDetails.stats[3].base_stat}</p>
							<p>Defesa Especial: {pokemonDetails.stats && pokemonDetails.stats[4].base_stat}</p>
							<p>Velocidade: {pokemonDetails.stats && pokemonDetails.stats[5].base_stat}</p>
						</section>
				</Statics>
				<section>
					<Type>
						<h2>Tipo:</h2>
						{types}
					</Type>
					<Moves>
						<h2>movimentos:</h2>
						{moves}
					</Moves>
				</section>
			</ContainerDetails>
			<Footer/>
    	</div>
  	)
}