import React, { useMemo, useState } from 'react';
import { Button } from '../components/ui/button';

const QUESTIONS = [
  'Você pensa frequentemente em apostar (planejando a próxima aposta)?',
  'Sente necessidade de apostar quantias cada vez maiores para sentir a mesma emoção?',
  'Tentou reduzir ou parar de apostar e não conseguiu?',
  'Sente-se inquieto(a) ou irritado(a) quando tenta parar de apostar?',
  'Aposta para fugir de problemas ou aliviar sentimentos negativos?',
  'Tenta recuperar perdas apostando mais (perseguir prejuízos)?',
  'Mentiu para familiares ou amigos sobre o quanto aposta?',
  'Colocou em risco (ou perdeu) relacionamentos, trabalho ou estudos por causa das apostas?',
  'Contou com outros para conseguir dinheiro devido a problemas financeiros causados pelas apostas?',
  'Já pediu dinheiro emprestado para apostar?'
];

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [done, setDone] = useState(false);

  const score = useMemo(() => answers.reduce((acc, a) => acc + (a === 'sim' ? 1 : 0), 0), [answers]);
  const risk = useMemo(() => (score >= 5 ? 'alto' : 'baixo'), [score]);

  const setAnswer = (idx, val) => {
    const next = [...answers];
    next[idx] = val;
    setAnswers(next);
  };

  const canSubmit = answers.every(a => a !== null);

  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold">Autoavaliação</h1>
        <p className="text-muted-foreground mt-2">Responda com sinceridade. Seus dados não são enviados para nenhum servidor. Este é um protótipo com salvamento local somente.</p>

        {!done && (
          <div className="mt-8 grid gap-4">
            {QUESTIONS.map((q, i) => (
              <div key={i} className="p-4 rounded-app border border-muted/40 bg-card">
                <p className="font-medium">{i+1}. {q}</p>
                <div className="mt-3 flex gap-2">
                  <Button variant={answers[i] === 'sim' ? 'primary' : 'outline'} onClick={() => setAnswer(i, 'sim')}>Sim</Button>
                  <Button variant={answers[i] === 'nao' ? 'secondary' : 'outline'} onClick={() => setAnswer(i, 'nao')}>Não</Button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">Pontuação atual: <span className="text-foreground font-medium">{score}</span></p>
              <Button variant="primary" size="lg" disabled={!canSubmit} onClick={() => setDone(true)}>Ver Resultado</Button>
            </div>
          </div>
        )}

        {done && (
          <div className="mt-8 p-6 rounded-app border border-muted/40 bg-card">
            {risk === 'alto' ? (
              <>
                <h2 className="text-2xl font-semibold text-foreground">Atenção: Risco Alto</h2>
                {/* Banner solicitado: logo abaixo do título */}
                <div className="mt-4">
                  <img
                    src="https://customer-assets.emergentagent.com/job_betfree/artifacts/iymplqwk_banner.png"
                    alt="Banner Livre das Apostas — Uma história de redenção"
                    className="w-full rounded-app border border-muted/40 shadow-soft"
                  />
                </div>
                <p className="text-muted-foreground mt-3">Seu resultado indica que você pode estar lidando com um vício em apostas. Você não está sozinho(a) e precisa de ajuda agora. Comece lendo o primeiro capítulo do livro "Livre das Apostas: Uma História de Redenção" ou adquira o guia completo com uma oferta especial.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="https://pay.hotmart.com/K99480183N?off=1pvjm7kd" target="_blank" rel="noreferrer">
                    <Button size="lg" variant="primary">Compre o Ebook Completo de R$29,90 por R$19,90!</Button>
                  </a>
                  <a href="https://schenkel94.github.io/meu_livro/" target="_blank" rel="noreferrer">
                    <Button size="lg" variant="secondary">Ler capítulo gratuito</Button>
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-foreground">Risco Baixo</h2>
                <p className="text-muted-foreground mt-3">Continue cuidando da sua saúde mental. Explore os recursos abaixo para relaxar e reconstruir hábitos positivos.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="/respiracao"><Button variant="secondary">Respire Comigo</Button></a>
                  <a href="/jogo"><Button variant="outline">Jogo Calmante</Button></a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
