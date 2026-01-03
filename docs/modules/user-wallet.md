# User & Wallet — Módulo

## Responsabilidades

- Definir o escopo inicial do módulo User & Wallet.
- Expor APIs versionadas e eventos de domínio.
- Garantir observabilidade e trilhas de auditoria.

## Endpoints (base)

- `GET /health`
- `GET /ready`
- `GET /api/v1/info`

## Eventos (propostos)

- `user-wallet.created`
- `user-wallet.updated`
- `user-wallet.alerted`

## Regras e Observações

- Todas as respostas devem conter `requestId` e `traceId`.
- Operações críticas devem ser idempotentes.
