# Fluxa Foods

Landing page da Fluxa Foods construída com [Next.js](https://nextjs.org) (App Router) e TypeScript.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx      # metadata, fonte (DM Sans via next/font) e <html>/<body>
  page.tsx        # composição de todas as seções
  globals.css     # estilos globais (migrados do HTML original)
components/
  Navbar.tsx      # nav fixa + drawer mobile (client)
  Hero.tsx        # hero com cena isométrica em SVG
  Marquee.tsx     # faixa de nichos
  Problem.tsx     # seção "O problema"
  HowItWorks.tsx  # seção "O sistema" + mock da Kitchen
  Compare.tsx     # tabela comparativa Fluxa vs iFood/Rappi
  Results.tsx     # resultados/metas
  Origin.tsx      # "Nossa história"
  ContactForm.tsx # formulário de diagnóstico -> WhatsApp (client)
  FinalCta.tsx    # CTA final
  Footer.tsx      # rodapé
  ScrollReveal.tsx# IntersectionObserver para animações de entrada (client)
public/
  logo.fluxa.png
  Favicon.fluxa.png
```

> O número de WhatsApp usado no envio do formulário está em `components/ContactForm.tsx` (`WHATSAPP_NUMBER`).
