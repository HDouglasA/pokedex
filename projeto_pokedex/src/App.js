import { Router } from "./Routes/Router";
import { GlobalStyle } from "./GlobalStyle";
import { State } from "./Context/State";

function App() {
	return (
    	<State>
			<GlobalStyle/>
      		<Router/>
    	</State>
  	)
}

export default App