# Bonus & Promotions — Módulo

## Responsabilidades

- Definir o escopo inicial do módulo Bonus & Promotions.
- Expor APIs versionadas e eventos de domínio.
- Garantir observabilidade e trilhas de auditoria.

## Endpoints (base)

- `GET /health`
- `GET /ready`
- `GET /api/v1/info`

## Eventos (propostos)

- `bonus-promotions.created`
- `bonus-promotions.updated`
- `bonus-promotions.alerted`

## Regras e Observações

- Todas as respostas devem conter `requestId` e `traceId`.
- Operações críticas devem ser idempotentes.
