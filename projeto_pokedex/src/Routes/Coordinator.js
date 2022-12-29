export const goToHomePage = (navigate) => {
	navigate("/")
}

export const goToPokedexPage = (navigate) => {
	navigate("/PokedexPage")
}

export const goToDetailsPage = (navigate, namePokemon) => {
	navigate(`/DetailsPage/${namePokemon}`)
}

export const comeBack = (navigate) => {
	navigate(-1)
}