# Nielsen x SpaceXAI

Passworded Nielsen media leave-behind built from the source GTM template.

## Stack

- Next.js 15.5
- React 19
- Geist
- vGPU hero rendering
- App Router under `src/`

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `SITE_PASSWORD` in the runtime environment. The application fails closed
when the variable is missing. Do not commit local environment files.

## Verify

```bash
npm run lint
SITE_PASSWORD='<runtime-value>' npm run build
```

The use cases and artifacts are fictional examples grounded in public Nielsen
media lines of business. They do not describe a current Nielsen program.
