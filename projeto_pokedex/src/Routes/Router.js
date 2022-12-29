import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from "../Pages/DetailsPage/DetailsPage";
import { HomePage } from "../Pages/HomePage/HomePage";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";

export const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/PokedexPage" element={<PokedexPage/>}/>	
					<Route path="/DetailsPage/:namePokemon" element={<DetailsPage/>} end/>	
				</Routes>
			</BrowserRouter>
		</div>
	)
}