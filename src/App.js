import Header from "./componets/Header/Header";
import ResultsTable from "./componets/ResultsTable/ResultsTable";
import UserInput from "./componets/UserInput/UserInput";

function App() {
  return (
    <div>
      <Header />

      <UserInput />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultsTable />
    </div>
  );
}

export default App;
