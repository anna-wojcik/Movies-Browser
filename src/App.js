import Section from "./common/Section";
import Header from "./feature/Header";
import Movies from "./feature/MoviesList";
import People from "./feature/PeopleList";

function App() {
  return (
    <>
      <Header />
      <Section title="Popular movies" body={<Movies />} />
      <Section title="Popular people" body={<People />} />
    </>
  );
}

export default App;
