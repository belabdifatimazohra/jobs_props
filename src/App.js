import logo from "./logo.svg";
import "./App.css";
// Importer Jobs components
import Jobs from "./components/Jobs";
// Import jobs data
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="bg-job"></div>

      {/* Parcourir tout le fichier avec un map la cle pour que node ne déclare pas erreur*/}
      {data.map((ele) => (
        <Jobs data={ele} key={ele.id} />
      ))}
    </div>
  );
}

export default App;
