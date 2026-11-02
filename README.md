# Minha ONG — Projeto Integrador Extensionista II

Projeto da Atividade 1: aplicação Vanilla JavaScript com Vite e API Express.

## Requisitos

- Node.js instalado
- npm

## Instalação

Na pasta do projeto, execute:

```bash
npm install
```

## Como executar

Abra dois terminais na pasta do projeto.

No primeiro terminal, inicie a API:

```bash
npm run api
```

No segundo terminal, inicie o site:

```bash
npm run dev
```

Abra no navegador o endereço mostrado pelo Vite, normalmente `http://localhost:5173/`.

## Rota da API

`GET /api/health`

Retorna o status `ok` e a data/hora da resposta. O Vite encaminha as chamadas `/api` para a API Express na porta 3000.

## Arquivos de ambiente

`.env` é ignorado pelo Git. `.env.example` pode ser publicado e serve como exemplo de configuração.
