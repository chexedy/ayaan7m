import { Navbar, BottomNav } from "./components";
import { Home, Projects } from "./pages";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <BottomNav />
        </div>
    )
}

export default App;