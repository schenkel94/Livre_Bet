import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Dialog } from '../components/ui/dialog';

export default function Game() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const boardRef = useRef(null);

  useEffect(() => {
    if (!running || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [running, timeLeft]);

  useEffect(() => {
    if (!running) return;
    const board = boardRef.current;
    if (!board) return;
    const spawn = () => {
      if (!running) return;
      const b = document.createElement('button');
      const size = Math.max(24, Math.floor(Math.random() * 48) + 24);
      b.setAttribute('aria-label', 'Bolha');
      b.className = 'absolute rounded-full bg-primary/30 border border-primary/50 animate-spawn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40';
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      const maxLeft = board.clientWidth - size - 8;
      const maxTop = board.clientHeight - size - 8;
      b.style.left = `${Math.max(4, Math.random() * maxLeft)}px`;
      b.style.top = `${Math.max(4, Math.random() * maxTop)}px`;
      b.addEventListener('click', () => {
        b.classList.add('animate-pop');
        setScore((s) => s + 1);
        setTimeout(() => b.remove(), 180);
      }, { passive: true });
      board.appendChild(b);
      setTimeout(() => { if (b && b.parentNode) b.remove(); }, 4000);
    };
    const interval = setInterval(spawn, 420);
    return () => clearInterval(interval);
  }, [running]);

  const start = () => { setScore(0); setTimeLeft(300); setRunning(true); setShowInfo(false); };
  const pause = () => setRunning(false);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const ss = String(timeLeft % 60).padStart(2, '0');

  return (
    <section className="section">
      <div className="container-page max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-semibold">Jogo Calmante</h1>
        <p className="text-muted-foreground mt-2">IMPORTANTE: Jogue pelo menos 5 minutos sempre que sentir uma forte vontade de apostar. O objetivo é distrair a mente e reduzir a ansiedade.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="bg-card border border-muted/40 rounded-app p-4 flex items-center justify-between">
            <span className="text-muted-foreground">Tempo</span>
            <span className="font-semibold text-foreground">{mm}:{ss}</span>
          </div>
          <div className="bg-card border border-muted/40 rounded-app p-4 flex items-center justify-between">
            <span className="text-muted-foreground">Bolhas</span>
            <span className="font-semibold text-primary">{score}</span>
          </div>
          <div className="bg-card border border-muted/40 rounded-app p-4 flex items-center justify-end gap-2">
            {!running ? (
              <Button variant="primary" onClick={start}>{timeLeft === 300 && score === 0 ? 'Começar' : 'Reiniciar'}</Button>
            ) : (
              <Button variant="outline" onClick={pause}>Pausar</Button>
            )}
          </div>
        </div>

        <div ref={boardRef} className="relative mt-6 h-[420px] rounded-app border border-muted/40 bg-card overflow-hidden">
          {!running && (
            <div className="absolute inset-0 grid place-items-center text-muted-foreground">
              <p>Toque/Clique nas bolhas para estourar</p>
            </div>
          )}
        </div>

        <Dialog open={showInfo} onOpenChange={setShowInfo} title="IMPORTANTE">
          <p>Jogue pelo menos 5 minutos sempre que sentir uma forte vontade de apostar. O objetivo é distrair a mente e reduzir a ansiedade.</p>
          <div className="mt-4">
            <Button variant="primary" onClick={() => { setShowInfo(false); start(); }}>Entendi, começar</Button>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
