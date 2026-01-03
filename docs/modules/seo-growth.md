# SEO & Growth — Módulo

## Responsabilidades

- Definir o escopo inicial do módulo SEO & Growth.
- Expor APIs versionadas e eventos de domínio.
- Garantir observabilidade e trilhas de auditoria.

## Endpoints (base)

- `GET /health`
- `GET /ready`
- `GET /api/v1/info`

## Eventos (propostos)

- `seo-growth.created`
- `seo-growth.updated`
- `seo-growth.alerted`

## Regras e Observações

- Todas as respostas devem conter `requestId` e `traceId`.
- Operações críticas devem ser idempotentes.
