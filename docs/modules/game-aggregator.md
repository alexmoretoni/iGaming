# Game Aggregator — Módulo

## Responsabilidades

- Definir o escopo inicial do módulo Game Aggregator.
- Expor APIs versionadas e eventos de domínio.
- Garantir observabilidade e trilhas de auditoria.

## Endpoints (base)

- `GET /health`
- `GET /ready`
- `GET /api/v1/info`

## Eventos (propostos)

- `game-aggregator.created`
- `game-aggregator.updated`
- `game-aggregator.alerted`

## Regras e Observações

- Todas as respostas devem conter `requestId` e `traceId`.
- Operações críticas devem ser idempotentes.
