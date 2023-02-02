import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './components/index';
import { Header, Footer } from './sections/index';
import { Home, Profile } from './Pages';
export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route element={<Home />} path='/'/>
                        <Route element={<Profile />} path='/profile'/>
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}