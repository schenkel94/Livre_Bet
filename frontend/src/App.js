import React, { useMemo } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Game from './pages/Game';
import Breath from './pages/Breath';

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-muted/40">
      <div className="container-page py-3 flex items-center gap-4">
        <button className="inline-flex items-center gap-2" onClick={() => navigate('/')}> 
          <div className="h-8 w-8 rounded-full bg-primary/20 grid place-items-center">
            <div className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="font-semibold tracking-tight">LivreBet Brasil</span>
        </button>
        <nav className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link to="/" className={`px-3 py-2 rounded-app text-sm ${isActive('/') ? 'bg-muted/60' : 'hover:bg-muted/40'} transition-colors`}>Início</Link>
          <Link to="/quiz" className={`px-3 py-2 rounded-app text-sm ${isActive('/quiz') ? 'bg-muted/60' : 'hover:bg-muted/40'} transition-colors`}>Autoavaliação</Link>
          <Link to="/jogo" className={`px-3 py-2 rounded-app text-sm ${isActive('/jogo') ? 'bg-muted/60' : 'hover:bg-muted/40'} transition-colors`}>Jogo Calmante</Link>
          <Link to="/respiracao" className={`px-3 py-2 rounded-app text-sm ${isActive('/respiracao') ? 'bg-muted/60' : 'hover:bg-muted/40'} transition-colors`}>Respire Comigo</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-muted/40 mt-16">
      <div className="container-page py-8 text-sm text-muted-foreground flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} LivreBet Brasil. Um espaço seguro para reconhecer, relaxar e reconstruir.</p>
        <div className="flex items-center gap-3">
          <a className="hover:text-foreground transition-colors" href="#sinais">Sinais de Alerta</a>
          <a className="hover:text-foreground transition-colors" href="/respiracao">Respiração</a>
          <a className="hover:text-foreground transition-colors" href="/jogo">Jogo Calmante</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const app = useMemo(() => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/jogo" element={<Game />} />
        <Route path="/respiracao" element={<Breath />} />
      </Routes>
      <Footer />
    </div>
  ), []);
  return app;
}
