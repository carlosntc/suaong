# Minha ONG — Projeto Integrador Extensionista II

Projeto desenvolvido para a Atividade 1, utilizando **HTML, CSS, JavaScript Vanilla, Vite e Express**. A aplicação apresenta uma página web que consulta uma API local e exibe seu status, a data e a hora da resposta.

## Requisitos

- Node.js instalado.
- npm instalado.

## Instalação

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

## Como executar o projeto

É necessário abrir dois terminais na pasta do projeto.

**1. Iniciar a API Express:**

```bash
npm run api
```

**2. Iniciar o site com Vite:**

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite, normalmente:

`http://localhost:5173/`

## Rota da API

**Método:** GET  
**Rota:** `/api/health`

A API retorna uma resposta JSON contendo o status da aplicação e a data e hora da consulta.

Exemplo de resposta:

```json
{
  "status": "ok",
  "datetime": "2026-11-02T12:00:00.000Z"
}
```

O Vite utiliza um proxy para encaminhar as requisições iniciadas com `/api` para a API Express, executada na porta 3000.

## Arquivos de ambiente

- `.env`: arquivo de configuração local, ignorado pelo Git.
- `.env.example`: exemplo de configuração disponibilizado no repositório.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Vite
- Node.js
- Express
- Git e GitHub

## Objetivo

Desenvolver uma aplicação web integrada a uma API, praticando a organização de arquivos, a comunicação entre frontend e backend e o controle de versão com Git e GitHub.