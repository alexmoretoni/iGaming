# Arquitetura Base — iGame K5

## Visão Geral

A plataforma segue arquitetura **API-first**, com microsserviços independentes e contratos estáveis. Cada módulo expõe APIs versionadas, eventos de domínio e métricas.

## Camadas

- **Core Engine**: orquestração, regras globais e versionamento de APIs.
- **Game Aggregator**: catálogo, provedores, fallback e geolocalização.
- **User & Wallet**: identidade, KYC, saldo único, ledger e antifraude.
- **Payments & Finance**: depósitos, saques, auditoria e limites dinâmicos.
- **Bonus & Promotions**: motor de regras, wagering e anti-abuso.
- **Affiliate System**: CPA/RevShare, sub-afiliados e tracking.
- **Admin K5 Panel**: RBAC, logs por ação, aprovações e configuração global.
- **AI & Automation**: segmentação, prevenção de churn e detecção de fraude.
- **SEO & Growth**: automação de conteúdo, sitemap e UTMs.

## Observabilidade

Todos os serviços devem expor:
- Logs estruturados (JSON)
- Métricas HTTP e de domínio
- Health checks (`/health` e `/ready`)

## Padrões de Integração

- REST versionado (`/api/v1/...`)
- Eventos de domínio (Kafka/Redpanda em versões futuras)
- Idempotência em operações financeiras

