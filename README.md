# book.coffee — Landing (React + Vite + TS)

Comandos rápidos:

```bash
# 1) Instalar dependências
npm i

# 2) Rodar em desenvolvimento
npm run dev

# 3) Build de produção
npm run build && npm run preview

# 4) Deploy no GitHub Pages
npm run deploy
```

## 🚀 Deploy no GitHub Pages

### Configuração automática (recomendado):
1. Faça push do código para o GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O deploy acontecerá automaticamente a cada push na branch `main`

### Deploy manual:
```bash
npm run deploy
```

**URL do site**: `https://[seu-usuario].github.io/book_coffee/`

Tecnologias: React 18, TypeScript 5, Vite 5. Paleta: primária `#588157`, secundária `#443627`, terciárias `#BEAA96` e `#DAD7CD`.

Ajustes recomendados: integrar o formulário de leads com seu backend/CRM (ex.: POST para `/api/leads`).


