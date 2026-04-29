# Portfolio CI/CD

Proyecto integrador del módulo **CI/CD** — desarrollo de un portfolio personal en React aplicando el flujo completo de DevOps moderno: control de versiones con Git, integración por Pull Requests en GitHub y despliegue continuo en Netlify.

## Objetivos del proyecto

- Crear y configurar un proyecto React con Vite.
- Trabajar con Git y GitHub usando ramas feature y Pull Requests.
- Aplicar buenas prácticas de integración (PRs revisados, deploy previews antes del merge).
- Configurar despliegue continuo en Netlify desde la rama `main`.
- Comprender el flujo CI/CD básico de un proyecto web moderno.

## Stack técnico

| Herramienta | Versión | Rol |
|---|---|---|
| Node.js | 20+ | Runtime |
| pnpm | 10+ | Package manager |
| Vite | 8.x | Bundler / dev server |
| React | 19.x | Framework UI |
| ESLint | 10.x | Linter |
| Netlify | — | Hosting + CI/CD |

## Arquitectura

```
portfolio-cicd/
├── src/
│   ├── components/        # Un componente por sección (Header, Hero, Skills, Projects, Footer)
│   ├── styles/
│   │   └── variables.css  # Design tokens compartidos (colores, fuentes, espaciado)
│   ├── App.jsx            # Interfaz común que orquesta todos los componentes
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── netlify.toml           # Config de build y deploy
├── vite.config.js
└── package.json
```

## Sistema de diseño

Todos los componentes consumen los **design tokens** definidos en `src/styles/variables.css`. Esto garantiza coherencia visual y permite que cada componente sea desarrollado de forma independiente sin perder unidad de marca.

**Reglas:**
- Los componentes **no** definen colores, fuentes ni espaciados hardcodeados.
- Las clases CSS siguen la convención **BEM** (`.componente__elemento--modificador`).
- Cada componente tiene su propio archivo `.css` co-localizado en `src/components/`.

## Flujo Git / GitHub

```
main (producción — protegida)
  ├── feature/header     → PR #1 → preview → merge → deploy
  ├── feature/hero       → PR #2 → preview → merge → deploy
  ├── feature/skills     → PR #3 → preview → merge → deploy
  ├── feature/projects   → PR #4 → preview → merge → deploy
  └── feature/footer     → PR #5 → preview → merge → deploy
```

**Reglas aplicadas:**
- `main` está protegida — no se permiten pushes directos.
- Cada feature se desarrolla en su propia rama `feature/<nombre>`.
- Los commits siguen [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`).
- Cada PR genera un **deploy preview** automático en Netlify.
- El merge se hace con **squash** para mantener una historia lineal y legible en `main`.

## Pipeline CI/CD

```
git push → GitHub → webhook → Netlify
                                   ├─ pnpm install
                                   ├─ pnpm build
                                   └─ deploy
                                      ├─ deploy-preview-N (si es PR)
                                      └─ producción (si es merge a main)
```

- **CI (Continuous Integration):** Netlify ejecuta `pnpm build` en cada PR. Si el build falla, el PR no se puede mergear.
- **CD (Continuous Deployment):** Cada merge a `main` despliega automáticamente a la URL de producción.
- **Deploy previews:** Cada PR tiene una URL única para revisar el cambio antes de mergear.

## Componentes y autores

> Cada sección representa el aporte individual de un "estudiante" simulando un equipo distribuido. Cada PR fue desarrollado en una rama independiente y revisado antes de mergear.

| # | Componente | Rama | Autor (PR) | Descripción |
|---|---|---|---|---|
| 1 | Header   | `feature/header` + `fix/team-branding` | Samuel Mesa Zapata + Emmanuel Quintero Gil | Barra de navegación sticky con efecto glass (backdrop-blur). Logo `<S&E />` que representa al dúo y links suaves a las secciones. Responsive a partir de 640px. |
| 2 | Hero     | `feature/hero` + `fix/team-branding`   | Samuel Mesa Zapata + Emmanuel Quintero Gil | Sección de presentación del equipo con saludo en estilo código, nombres destacados en color de marca, rol del dúo (Web + Data) y dos CTA. Glow radial decorativo y lift-on-hover en los botones. |
| 3 | Skills   | `feature/skills`   | Samuel Mesa Zapata + Emmanuel Quintero Gil | Sección de equipo con dos tarjetas (una por miembro), cada una con avatar de iniciales, nombre, rol y stack técnico complementario (Frontend & DevOps + Data Analytics). |
| 4 | Projects | `feature/projects` | Samuel Mesa Zapata + Emmanuel Quintero Gil | Grilla de proyectos con tarjetas que incluyen rol/autor (Equipo o individual), título, descripción, tags de tecnologías y links a GitHub y demo en vivo cuando aplican. |
| 5 | Footer   | `feature/footer`   | Samuel Mesa Zapata + Emmanuel Quintero Gil | Footer con CTA de contacto, dos tarjetas con los miembros del equipo (rol + link a GitHub), copyright dinámico y línea de meta con el stack del sitio. |

## Scripts disponibles

```bash
pnpm dev      # arranca el dev server (Vite + HMR)
pnpm build    # build de producción a dist/
pnpm preview  # preview local del build de producción
pnpm lint     # corre ESLint
```

## Despliegue

- **Producción:** https://portfoliocicd.netlify.app/
- **Repositorio:** https://github.com/MesaZapata/portfolio-cicd

---

**Autor:** Samuel Mesa Zapata
**Curso:** CI/CD — DevOps
**Año:** 2026
