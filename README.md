# iGame K5 — Casa de Slots Avançada

Plataforma iGaming modular, API-first e preparada para operação global. Este repositório fornece a estrutura base do sistema, incluindo serviços principais, esquema inicial de banco de dados e documentação técnica.

## Estrutura

```
/ services
  /core-engine
  /game-aggregator
  /user-wallet
  /payments-finance
  /bonus-promotions
  /affiliate-system
  /admin-panel
  /ai-automation
  /seo-growth
/ db
/ docs
/ infra
```

## Serviços Principais

Cada serviço possui um servidor HTTP mínimo com `/health`, `/ready` e `/api/v1/info`.

## Inicialização Local

1. Suba a infraestrutura básica:
   ```bash
   docker compose -f infra/docker-compose.yml up -d
   ```
2. Execute um serviço:
   ```bash
   cd services/user-wallet
   npm install
   npm run start
   ```

## Próximos Passos

Consulte `docs/ARCHITECTURE.md` e `docs/modules/*.md` para detalhes e evolução dos módulos.
