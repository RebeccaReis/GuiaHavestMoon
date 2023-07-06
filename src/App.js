import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer.js"
import "./styles.css";
import Body from "./components/Body/Body.js";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer/>
    </div>
  );
}
