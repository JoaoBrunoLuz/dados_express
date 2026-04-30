# Antigravity Kit

> Modelos de Agentes de IA com Skills, Agentes e Workflows

<div align="center">
    <a href="https://unikorn.vn/p/antigravity-kit?ref=unikorn" target="_blank"><img src="https://unikorn.vn/api/widgets/badge/antigravity-kit?theme=dark" alt="Antigravity Kit - Destaque no Unikorn.vn" style="width: 210px; height: 54px;" width="210" height="54" /></a>
    <a href="https://unikorn.vn/p/antigravity-kit?ref=unikorn" target="_blank"><img src="https://unikorn.vn/api/widgets/badge/antigravity-kit/rank?theme=dark&type=daily" alt="Antigravity Kit - Ranking Diário" style="width: 250px; height: 64px;" width="250" height="64" /></a>
    <a href="https://launch.j2team.dev/products/antigravity-kit" target="_blank"><img src="https://launch.j2team.dev/badge/antigravity-kit/dark" alt="Antigravity Kit no J2TEAM Launch" width="250" height="54" /></a>
</div>

## Instalação Rápida

```bash
npx @vudovn/ag-kit init
```

Ou instale globalmente:

```bash
npm install -g @vudovn/ag-kit
ag-kit init
```

Isso instala a pasta `.agent` contendo todos os modelos no seu projeto.

### ⚠️ Nota Importante sobre o `.gitignore`
Se você estiver usando editores baseados em IA como **Cursor** ou **Windsurf**, adicionar a pasta `.agent/` ao seu `.gitignore` pode impedir que a IDE indexe os workflows. Isso faz com que os comandos de barra (como `/plan`, `/debug`) não apareçam no menu de sugestões do chat.

**Solução Recomendada:**
Para manter a pasta `.agent/` local (não monitorada pelo Git) mas manter a funcionalidade da IA:
1. Garanta que `.agent/` **NÃO** esteja no `.gitignore` do seu projeto.
2. Em vez disso, adicione-a ao seu arquivo de exclusão local: `.git/info/exclude`

## O que está Incluído

| Componente    | Quantidade | Descrição                                                            |
| ------------- | ---------- | -------------------------------------------------------------------- |
| **Agentes**   | 20         | Personas especialistas em IA (frontend, backend, segurança, PM, etc) |
| **Skills**    | 37         | Módulos de conhecimento específicos por domínio                       |
| **Workflows** | 11         | Procedimentos de comandos de barra                                   |
| **Modern ES** | 2026+      | **Next.js 16 & React 19 Nativo** (Cache Components, PPR, Proxy)      |


## Como Usar

### Usando Agentes

**Não há necessidade de mencionar os agentes explicitamente!** O sistema detecta e aplica automaticamente o(s) especialista(s) correto(s):

```
Você: "Adicione autenticação JWT"
IA: 🤖 Aplicando @security-auditor + @backend-specialist...

Você: "Corrija o botão do modo escuro"
IA: 🤖 Usando @frontend-specialist...

Você: "O login retorna erro 500"
IA: 🤖 Usando @debugger para análise sistemática...
```

**Como funciona:**

- Analisa sua solicitação silenciosamente
- Detecta o(s) domínio(s) automaticamente (frontend, backend, segurança, etc.)
- Seleciona o(s) melhor(es) especialista(s)
- Informa qual especialidade está sendo aplicada
- Você recebe respostas de nível especialista sem precisar conhecer a arquitetura do sistema

**Benefícios:**

- ✅ Curva de aprendizado zero - apenas descreva o que você precisa
- ✅ Sempre obtenha respostas de especialistas
- ✅ Transparente - mostra qual agente está sendo usado
- ✅ Ainda pode ser substituído mencionando o agente explicitamente

### Usando Workflows (Fluxos de Trabalho)

Invoque workflows com comandos de barra:

| Comando          | Descrição                                 |
| ---------------- | ----------------------------------------- |
| `/brainstorm`    | Explore opções antes da implementação     |
| `/create`        | Crie novos recursos ou aplicativos        |
| `/debug`         | Depuração sistemática                     |
| `/deploy`        | Implante a aplicação                      |
| `/enhance`       | Melhore o código existente                |
| `/orchestrate`   | Coordenação multi-agente                  |
| `/plan`          | Crie um detalhamento de tarefas           |
| `/preview`       | Visualize as mudanças localmente          |
| `/status`        | Verifique o status do projeto             |
| `/test`          | Gere e execute testes                     |
| `/ui-ux-pro-max` | Design com 50 estilos                     |

Exemplo:

```
/brainstorm sistema de autenticação
/create landing page com seção hero
/debug por que o login falha
```

### Usando Skills (Habilidades)

As Skills são carregadas automaticamente com base no contexto da tarefa. A IA lê as descrições das habilidades e aplica o conhecimento relevante.

## Ferramenta CLI

| Comando         | Descrição                                    |
| --------------- | -------------------------------------------- |
| `ag-kit init`   | Instala a pasta `.agent` no seu projeto      |
| `ag-kit update` | Atualiza para a versão mais recente          |
| `ag-kit status` | Verifica o status da instalação              |

### Opções

```bash
ag-kit init --force        # Sobrescreve a pasta .agent existente
ag-kit init --path ./myapp # Instala em um diretório específico
ag-kit init --branch dev   # Usa uma branch específica
ag-kit init --quiet        # Oprime a saída (para CI/CD)
ag-kit init --dry-run      # Pré-visualiza ações sem executar
```

## Documentação

- **[Exemplo de Web App](https://antigravity-kit.unikorn.vn/docs/guide/examples/brainstorm)** - Guia passo a passo para criar uma aplicação web
- **[Documentação Online](https://antigravity-kit.unikorn.vn/docs)** - Navegue por toda a documentação online

## Licença

MIT © Vudovn
