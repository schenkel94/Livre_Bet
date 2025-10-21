import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';

export default function Breath() {
  const [running, setRunning] = useState(true);
  const [phase, setPhase] = useState('Inspire');
  const [cycles, setCycles] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!running) return;
    let elapsed = 0;
    const tick = setInterval(() => {
      elapsed += 500;
      const t = (elapsed % 10000); // 10s cycle
      if (t < 4000) setPhase('Inspire'); else setPhase('Expire');
      if (t < 500) setCycles((c) => c + 1);
    }, 500);
    return () => clearInterval(tick);
  }, [running]);

  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold">Respire Comigo</h1>
        <p className="text-muted-foreground mt-2">Exercício guiado de respiração 4-6. Inspire por 4s, expire por 6s. Repita pelo menos 10 ciclos.</p>

        <div className="mt-8 grid gap-6 place-items-center">
          <div ref={ref} className="h-56 w-56 rounded-full bg-primary/20 border border-primary/40 animate-breathe grid place-items-center shadow-elegant">
            <div className="text-lg font-medium text-primary-foreground bg-primary px-4 py-1 rounded-full">{phase}</div>
          </div>
          <div className="flex items-center gap-3">
            {running ? (
              <Button variant="outline" onClick={() => setRunning(false)}>Pausar</Button>
            ) : (
              <Button variant="primary" onClick={() => setRunning(true)}>Retomar</Button>
            )}
            <div className="px-3 py-2 rounded-app border border-muted/40 bg-card text-sm text-muted-foreground">Ciclos: <span className="text-foreground font-medium">{cycles}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
