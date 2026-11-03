import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import './index.css';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
}

export default App;