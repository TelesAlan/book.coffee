import React, { useMemo, useState } from 'react'

type LeadFormData = {
  name: string
  email: string
  phone: string
}

const palette = {
  primary: '#588157',
  secondary: '#443627',
  tertiary1: '#BEAA96',
  tertiary2: '#DAD7CD'
}

const navItems = [
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#clube', label: 'Clube de Assinatura' },
  { href: '#contato', label: 'Contato' }
]

export function App(): JSX.Element {
  const [lead, setLead] = useState<LeadFormData>({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const priceAnchor = useMemo(() => ({
    original: 'R$89,90',
    promo: 'R$59,90/mês',
    detail: 'no plano anual'
  }), [])

  function handleChange(field: keyof LeadFormData, value: string) {
    setLead(prev => ({ ...prev, [field]: value }))
  }

  function validate(form: LeadFormData) {
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email)
    const nameOk = form.name.trim().length >= 2
    const phoneOk = form.phone.replace(/\D/g, '').length >= 10
    return emailOk && nameOk && phoneOk
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate(lead)) return
    // Simula envio. Substitua por POST para seu backend/CRM
    await new Promise(r => setTimeout(r, 600))
    setSubmitted(true)
  }

  return (
    <>
      <header className="site-header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="#top" aria-label="book.coffee" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: palette.primary, display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800 }}>b</div>
            <strong style={{ fontFamily: 'Libre Baskerville, Georgia, serif', fontSize: 18 }}>book.coffee</strong>
          </a>
          <nav className="main-nav" aria-label="Principal" style={{ display: 'none', gap: 24 }}>
            {navItems.map(i => (
              <a key={i.href} href={i.href}>{i.label}</a>
            ))}
          </nav>
          <div style={{ display: 'none' }} />
          <a href="#lead" className="btn btn-primary shadow-soft" style={{ backgroundColor: palette.primary }}>Quero meu livro + café</a>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ padding: '72px 0 32px' }}>
          <div className="container" style={{ display: 'grid', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'grid', gap: 16 }}>
              <span className="badge" style={{ background: palette.tertiary2 }}>Café, leitura e bem‑estar</span>
              <h1>Onde o aroma do café encontra as páginas da sua próxima história</h1>
              <p className="muted" style={{ fontSize: 18, lineHeight: 1.6 }}>A book.coffee une cafeteria e livraria para criar experiências sensoriais: cafés especiais, clube de assinatura com livros e brindes, eventos literários e um espaço perfeito para estudar, trabalhar e se inspirar.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#lead" className="btn btn-primary">Quero meu teste grátis</a>
                <a href="#produtos" className="btn btn-outline">Conhecer produtos</a>
              </div>
              <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="badge" style={{ background: palette.tertiary1, color: palette.secondary }}>De {priceAnchor.original} por <strong>{priceAnchor.promo}</strong> {priceAnchor.detail}</div>
                <span className="muted">Apenas 100 vagas no lote promocional</span>
              </div>
            </div>
            <div className="card shadow-soft" style={{ padding: 16, background: '#fff' }}>
              <img src={heroImageDataUrl} alt="Café e livros" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
            </div>
          </div>
        </section>

        <section id="quem-somos" style={{ padding: '56px 0' }}>
          <div className="container" style={{ display: 'grid', gap: 16 }}>
            <h2>Quem Somos</h2>
            <p className="muted" style={{ fontSize: 18, lineHeight: 1.8 }}>Nossa missão é oferecer um ambiente acolhedor que inspire a conexão entre pessoas e histórias. Valorizamos o cuidado nos detalhes, o respeito ao tempo de cada leitura e a celebração de bons encontros, sempre com um bom café por perto.</p>
          </div>
        </section>

        <section id="produtos" style={{ padding: '56px 0', background: palette.tertiary2 }}>
          <div className="container" style={{ display: 'grid', gap: 24 }}>
            <h2>Produtos e Serviços</h2>
            <div className="grid grid-sm-2 grid-lg-4">
              {[
                { title: 'Cafés especiais', text: 'Grãos selecionados e métodos variados para paladares exigentes.' },
                { title: 'Clube de assinatura', text: 'Todo mês, um livro + café e brindes exclusivos na sua casa.' },
                { title: 'Eventos literários', text: 'Lançamentos, debates e encontros com autores e leitores.' },
                { title: 'Produtos personalizados', text: 'Canecas, marcadores e kits para presentear.' }
              ].map(card => (
                <article className="card" key={card.title} style={{ padding: 20, display: 'grid', gap: 8 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: palette.primary, display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800 }}>☕</div>
                  <h3 style={{ margin: 0 }}>{card.title}</h3>
                  <p className="muted" style={{ margin: 0 }}>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clube" style={{ padding: '56px 0' }}>
          <div className="container" style={{ display: 'grid', gap: 24 }}>
            <h2>Clube de Assinatura</h2>
            <div className="card" style={{ padding: 20, display: 'grid', gap: 12 }}>
              <p className="muted">Transforme suas leituras em experiências únicas. Assine e receba um kit mensal com livro curado, café especial e um mimo surpresa.</p>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>7 dias grátis para degustar</li>
                <li>Frete reduzido para membros</li>
                <li>Convites para eventos exclusivos</li>
              </ul>
              <div>
                <a href="#lead" className="btn btn-primary">Quero meu teste grátis</a>
              </div>
            </div>
          </div>
        </section>

        <section id="lead" style={{ padding: '56px 0', background: 'linear-gradient(180deg, #fff, #F6F5F1)' }}>
          <div className="container" style={{ display: 'grid', gap: 24 }}>
            <div style={{ display: 'grid', gap: 8 }}>
              <h2>Transforme suas leituras em experiências únicas!</h2>
              <p className="muted">Assine agora e ganhe 7 dias grátis no nosso clube de leitura.</p>
            </div>

            {!submitted ? (
              <form onSubmit={onSubmit} className="card" style={{ padding: 20, display: 'grid', gap: 12 }}>
                <div className="grid grid-sm-2">
                  <div>
                    <label htmlFor="name" className="sr-only">Nome</label>
                    <input id="name" className="input" placeholder="Seu nome" value={lead.name} onChange={e => handleChange('name', e.target.value)} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">E-mail</label>
                    <input id="email" type="email" className="input" placeholder="Seu e-mail" value={lead.email} onChange={e => handleChange('email', e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Telefone</label>
                  <input id="phone" className="input" placeholder="Seu telefone" value={lead.phone} onChange={e => handleChange('phone', e.target.value)} required />
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: palette.primary }}>Quero meu teste grátis</button>
                  <span className="muted">De {priceAnchor.original} por <strong>{priceAnchor.promo}</strong> {priceAnchor.detail}. Apenas 100 vagas.</span>
                </div>
                <small className="muted">Ao continuar, você concorda com nossa <a href="#politica">Política de Privacidade</a> e <a href="#termos">Termos de Uso</a>.</small>
              </form>
            ) : (
              <div className="card" style={{ padding: 24, display: 'grid', gap: 12 }}>
                <h3>Quase lá! 🎉</h3>
                <p className="muted">Recebemos seus dados. Em instantes você receberá um e-mail com as instruções para ativar seus 7 dias grátis.</p>
                <a href="#produtos" className="btn btn-outline">Ver produtos</a>
              </div>
            )}
          </div>
        </section>

        <section aria-labelledby="depoimentos-title" style={{ padding: '56px 0' }}>
          <div className="container" style={{ display: 'grid', gap: 24 }}>
            <h2 id="depoimentos-title">O que dizem nossos leitores</h2>
            <div className="grid grid-sm-2 grid-lg-3">
              {[
                { name: 'Marina A.', text: 'A curadoria é impecável e os cafés são maravilhosos. Meu momento favorito do mês!' },
                { name: 'João P.', text: 'Perfeito para o home office. O ambiente inspira e os eventos conectam pessoas.' },
                { name: 'Luísa R.', text: 'Assinatura vale cada centavo. Sempre recebo um mimo que me surpreende.' }
              ].map(t => (
                <blockquote key={t.name} className="card" style={{ padding: 20, margin: 0 }}>
                  <p style={{ margin: 0 }} className="muted">“{t.text}”</p>
                  <footer style={{ marginTop: 8, fontWeight: 600 }}>{t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" style={{ padding: '56px 0', background: palette.tertiary2 }}>
          <div className="container" style={{ display: 'grid', gap: 12 }}>
            <h2>Contato</h2>
            <p className="muted">Endereço: Rua das Letras, 123 — Centro, Sua Cidade — Telefone: (11) 99999-9999 — Instagram: @book.coffee</p>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ padding: '32px 0' }}>
        <div className="container" style={{ display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <strong style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>book.coffee</strong>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a id="politica" href="#" aria-label="Política de Privacidade">Política de Privacidade</a>
              <a id="termos" href="#" aria-label="Termos de Uso">Termos de Uso</a>
            </div>
          </div>
          <small className="muted">© {new Date().getFullYear()} book.coffee — Todos os direitos reservados.</small>
        </div>
      </footer>
    </>
  )
}

// Imagem inline otimizada (data URL) para performance inicial
const heroImageDataUrl =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
    <defs>
      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#DAD7CD" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#BEAA96" stop-opacity="0.7"/>
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#g1)"/>
    <g fill="#443627" fill-opacity="0.15">
      <circle cx="160" cy="120" r="90"/>
      <circle cx="760" cy="160" r="120"/>
      <circle cx="520" cy="420" r="140"/>
    </g>
    <g>
      <rect x="140" y="160" width="220" height="220" rx="20" fill="#fff" opacity="0.9"/>
      <text x="170" y="210" font-size="28" font-family="Georgia, serif" fill="#443627">Café & Livros</text>
      <text x="170" y="250" font-size="16" font-family="Inter, sans-serif" fill="#443627" opacity="0.8">Sabores e histórias em harmonia.</text>
      <rect x="170" y="280" width="160" height="44" rx="22" fill="#588157"/>
      <text x="190" y="309" font-size="14" font-family="Inter, sans-serif" fill="#fff">Quero meu teste grátis</text>
    </g>
  </svg>
  `)


