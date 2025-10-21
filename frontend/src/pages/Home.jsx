import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Dialog } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const heroImage = 'https://images.unsplash.com/photo-1606936556540-399c90c70281';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const startAssessment = () => setOpen(true);
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('lead_user', JSON.stringify({ nome, email }));
    } catch (e) {}
    setOpen(false);
    navigate('/quiz');
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img src={`${heroImage}?auto=format&fit=crop&w=1600&q=80`} alt="Calm dark blue abstract" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-page relative section flex flex-col gap-6 sm:gap-8 lg:gap-10">
          <span className="kicker">Reconheça • Relaxe • Reconstrua</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-3xl">LivreBet Brasil</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">Um espaço seguro para identificar o vício em apostas e encontrar formas saudáveis de lidar com a ansiedade.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg" onClick={startAssessment}>Iniciar Avaliação</Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/jogo')}>Jogo Calmante</Button>
            <Button variant="ghost" size="lg" onClick={() => navigate('/respiracao')}>Respire Comigo</Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('sinais')?.scrollIntoView({behavior:'smooth'})}>Guia Sinais de Alerta</Button>
          </div>
        </div>
      </section>

      <section id="recursos" className="section">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Autoavaliação" description="Responda 10 perguntas objetivas para entender seu nível de risco." ctaLabel="Começar" onCta={startAssessment} />
          <Card title="Jogo Calmante" description="Estoure bolhas por 5 minutos para reduzir a ansiedade e adiar impulsos." ctaLabel="Jogar" onCta={() => navigate('/jogo')} />
          <Card title="Respire Comigo" description="Siga o ciclo guiado de respiração 4-6 para acalmar o sistema nervoso." ctaLabel="Respirar" onCta={() => navigate('/respiracao')} />
          <Card title="Ebook Guia" description="Baixe o capítulo gratuito ou adquira o guia completo com oferta especial." ctaLabel="Ver opções" onCta={() => document.getElementById('cta')?.scrollIntoView({behavior:'smooth'})} />
        </div>
      </section>

      <section id="sinais" className="section bg-card/60 border-y border-muted/40">
        <div className="container-page">
          <h2 className="text-2xl sm:text-3xl font-semibold">Sinais de Alerta</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">Reconhecer os sinais é o primeiro passo para buscar ajuda</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Pensar constantemente em apostas',
              'Apostar quantias cada vez maiores',
              'Tentar recuperar perdas apostando mais',
              'Mentir sobre apostas para amigos e família',
              'Sentir ansiedade ou irritabilidade ao não apostar',
              'Negligenciar trabalho, estudos ou relacionamentos',
              'Pedir dinheiro emprestado para apostar',
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-app p-5 border border-muted/40 shadow-soft flex flex-col">
                <span className="text-primary mb-2">0{idx+1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section">
        <div className="container-page grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-card rounded-app p-6 border border-muted/40">
            <h3 className="text-xl sm:text-2xl font-semibold">Pronto para começar?</h3>
            <p className="text-muted-foreground mt-2">Dê o primeiro passo agora. Leva menos de 3 minutos.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={startAssessment}>Iniciar Avaliação</Button>
              <a href="https://schenkel94.github.io/meu_livro/" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg">Baixar Capítulo Gratuito</Button>
              </a>
              <a href="https://pay.hotmart.com/K99480183N?off=1pvjm7kdIV" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">Comprar Ebook Completo</Button>
              </a>
            </div>
          </div>
          <div className="bg-card rounded-app p-6 border border-muted/40">
            <p className="kicker">Dica</p>
            <p className="mt-2 text-sm text-muted-foreground">Salve o atalho do LivreBet Brasil na tela inicial do seu celular para acesso rápido nos momentos de impulso.</p>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen} title="Iniciar Avaliação">
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="voce@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <Button type="submit" variant="primary" size="lg">Continuar</Button>
        </form>
      </Dialog>
    </>
  );
}
