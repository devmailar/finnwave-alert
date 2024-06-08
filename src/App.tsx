import { Wave } from "./icons/Wave";

function App() {
	return (
		<>
			<nav className="flex items-center gap-x-4 w-full bg-red-400">
				<span className="text-red-800 text-5xl font-bold underline">
					FinnWave Alert
				</span>
				<Wave />
			</nav>
		</>
	);
}

export default App;
