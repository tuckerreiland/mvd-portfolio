import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="w-screen flex flex-col items-center">
		<Header/>
		<Hero/>
		<About/>
		<Resume/>
		<Contact/>
    </div>
  );
}

export default App;
