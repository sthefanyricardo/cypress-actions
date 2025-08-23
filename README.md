![poster](./.github/poster.png)

![Cypress](https://img.shields.io/badge/Cypress-Testing-04C38E?logo=cypress) ![CI/CD](https://img.shields.io/github/actions/workflow/status/sthefanyricardo/cypress-actions/cypress-tests.yml?label=CI/CD&logo=github) ![Último commit](https://img.shields.io/github/last-commit/sthefanyricardo/cypress-actions?label=Último%20commit&style=flat&logo=git)

---

# Automação com Cyress e GitHub Actions

Este repositório contém o projeto desenvolvido durante o curso [**Testes contínuos em Cypress no Github Actions**](https://www.udemy.com/course/testes-continuos-em-cypress-no-github-actions/), ministrado por **Fernando Papito** na plataforma **Udemy**.

O objetivo é demonstrar a integração de **testes automatizados com Cypress** em um pipeline de **CI/CD** utilizando o **GitHub Actions**, incluindo relatórios e métricas com **Cypress Cloud**, **Tesults** e **Allure Report**.

Com este setup, é possível garantir que os testes de regressão sejam executados automaticamente a cada alteração no código, proporcionando uma detecção precoce de bugs e um aumento na confiabilidade do sistema.

<details>
  <summary>Clique aqui para expandir as informações sobre o Curso</summary>

  ### 🎯 Objetivo

  O principal objetivo deste projeto é construir um fluxo de trabalho (workflow) de testes contínuos que:

  - 🔄 Automatize a execução dos testes de regressão do Cypress.
  - ⚙️ Utilize o GitHub Actions para orquestrar o pipeline de testes.
  - 📊 Gere relatórios, screenshots e métricas para evidenciar a execução dos testes:
    - ☁️ Integre-se ao Cypress Cloud (antigo Cypress Dashboard) para uma visualização detalhada do histórico de testes.
    - ☁️ Integre-se ao Tesults para uma visualização detalhada do histórico de testes.
    - ☁️ Integre-se ao Allure Report para uma visualização detalhada do histórico de testes.
  
  --- 

  ### 📑 Conteúdo do Curso

  Durante o curso, foram aplicados os seguintes conceitos:

  - Construção de Pipelines e Workflows de CI/CD: Criação de arquivos .yml para automatizar a execução dos testes no GitHub Actions.
  - Testes Contínuos com Cypress: Configuração e execução dos testes de regressão de forma automática, garantindo a detecção precoce de bugs.
  - Geração de Relatórios e Métricas: Configuração de integrações para gerar evidências de execução (vídeos, screenshots) e dashboards com relatórios detalhados.

</details>

---

## 📊 Relatórios e Métricas

A execução dos testes gera relatórios completos e evidências que podem ser acompanhados em diferentes plataformas, garantindo rastreabilidade, análise detalhada e colaboração da equipe.

Esses relatórios permitem:
- Visualizar o histórico de execuções com status, tempo e desempenho.
- Consultar evidências (screenshots, vídeos, anexos e logs).
- Identificar falhas e tendências com métricas e gráficos em tempo real.
- Consolidar e compartilhar resultados em dashboards interativos.
- As ferramentas utilizadas neste projeto são:

As ferramentas de geração de relatórios e métricas utilizadas neste projeto são:
- [**Cypress Cloud (Dashboard)**](https://cloud.cypress.io/) ![Cypress Cloud](https://img.shields.io/badge/Cypress%20Cloud-Dashboard-04C38E?logo=cypress)  
- [**Tesults**](https://www.tesults.com/) ![Tesults](https://img.shields.io/badge/Tesults-Results-3F7CAC)  
- [**Cypress Allure Plugin**](https://github.com/Shelex/cypress-allure-plugin) ![Allure Report](https://img.shields.io/badge/Allure-Reports-E91E63?logo=allure)

---

## ⚙️ Fluxo de Testes com GitHub Actions

Os fluxos de trabalho (workflows) estão configurados no diretório .github/workflows/. Cada arquivo YAML define um pipeline de CI/CD que pode ser ativado manualmente.

- ```cypress-tests.yml:``` Este workflow é configurado para a integração com o Tesults.

- ```cypress-cloud.yml:``` Este workflow é configurado para a integração com o Cypress Cloud.

Cada workflow executa a suíte de testes de ponta a ponta em múltiplos navegadores (Electron, Chrome, Edge e Firefox) e envia os resultados da execução, incluindo logs, vídeos e screenshots, para a respectiva plataforma.

---

## 📁 Estrutura do Repositório

O projeto segue a estrutura padrão do Cypress e inclui arquivos de configuração específicos para a integração contínua.

<details>
  <summary>Clique aqui para expandir a estrutura de arquivos</summary>

  ```text
  📦 cypress-actions/
  ┣ 📂 .github/
  ┃ └── workflows/
  ┃     ┣ 📜 cypress-cloud.yml     # Workflow para execução de testes no Cypress Cloud
  ┃     ┗ 📜 cypress-tests.yml     # Workflow para execução básica de testes
  ┣ 📂 cypress/
  ┃ ┣ 📂 e2e/
  ┃ ┃ ┗ 📜 login.cy.js           # Exemplo de um caso de teste e2e
  ┃ ┗ 📂 support/
  ┃     ┣ 📜 commands.js           # Comandos customizados do Cypress
  ┃     ┗ 📜 e2e.js                # Arquivo de suporte
  ┣ 📜 .gitignore                    # Arquivos e pastas a serem ignorados pelo Git
  ┣ 📜 cypress.config.js             # Arquivo de configuração global do Cypress
  ┣ 📜 package-lock.json             # Controle de versões exatas das dependências
  ┣ 📜 package.json                  # Lista as dependências e scripts do projeto
  ┣ 📜 README.md                     # Documentação principal do repositório
  ┣ 📜 runner-chrome.js              # Script para execução com Chrome
  ┣ 📜 runner-edge.js                # Script para execução com Edge
  ┣ 📜 runner-electron.js            # Script para execução com Electron
  ┣ 📜 runner-firefox.js             # Script para execução com Firefox
  ┣ 📜 runner.js                     # Script principal de execução
  ┗ 📜 yarn.lock                     # Controle de versões exatas das dependências
  ```

</details>

---

## 🛠️ Tecnologias, Ferramentas e Requisitos

Este projeto foi desenvolvido com as seguintes ferramentas e tecnologias. Certifique-se de que sua máquina atende aos requisitos abaixo para executar os testes.

### Linguagem e Frameworks

<details>
  <summary>Clique aqui para expandir as informações</summary>

  - [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) → Linguagem utilizada para implementação dos testes.  
  - [**Cypress**](https://www.cypress.io/) → Framework de automação de testes end-to-end para aplicações web.  
  - [**Node.js**](https://nodejs.org/en/download) + **npm**/**Yarn** → Ambiente de execução e gerenciamento de dependências.  
  - [**Java**](https://www.java.com/en/) → Necessário para geração de relatórios com o [cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin).  

</details>

### Ferramentas de Desenvolvimento

<details>
  <summary>Clique aqui para expandir as informações</summary>

  - [**Visual Studio Code**](https://code.visualstudio.com/download) → IDE utilizada para desenvolvimento e manutenção dos testes.  
  - [**Git**](https://git-scm.com/downloads) → Controle de versão.  
  - [**GitHub**](https://github.com) → Repositório remoto para versionamento e compartilhamento do código.  

</details>

---

## ▶️ Execução dos Testes

### 1️⃣ Instalação e Configuração

<details>
  <summary>🔹 Pré-requisitos</summary>

  Antes de executar os testes, certifique-se de que possui os seguintes itens instalados na sua máquina:

  1. **Ferramentas de linha de comando (CLI)**
  As ferramentas de terminal, também conhecidas como linha de comando (command-line interface ou CLI), é necessária para fazer as instalações, configurar o ambiente e executar os testes.
      - [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=pt-BR&gl=BR) e Prompt de Comando: São as ferramentas padrão no Windows.
        - **Tutoriais de instalação:**
          - [Terminal do WINDOWS - APRENDA COMO USAR!](https://www.youtube.com/watch?v=3VlV3EoOi_A)
          - [Comandos do Prompt do Windows Que Você Deveria Saber](https://www.youtube.com/watch?v=66ta9rPcRZs&t=34s)
      - [Git Bash](https://git-scm.com/downloads): É um emulador de terminal que vem com o Git, muito popular no Windows.
        - **Tutoriais de instalação:**
          - [Instalando Git e GitHub no PC - @Curso em Vídeo HTML5 e CSS3](https://www.youtube.com/watch?v=NgWExh3bswg)
          - [Git e Github Tutorial completo - Introdução prática para iniciantes](https://www.youtube.com/watch?v=_hZf1teRFNg&t=293s)
      - [CMDER](https://cmder.app/): É uma ferramenta de terceiros que oferece uma experiência de terminal mais completa e amigável.
        - **Tutoriais de instalação:**
          - [Instalando um terminal no windows - [Cmder]](https://www.youtube.com/watch?v=2pNZgvzrZdU)
          - [#FADEV - 03 Instalando e conhecendo o Cmder](https://www.youtube.com/watch?v=tg7dQi6BLEw)

  2. **Node.js:**
      - Versão neste projeto: 22.14.0 LTS
      - [Faça o download do Node.js](https://nodejs.org/en/download)
      - Gerenciadores de pacotes:
          - npm versão 11.5.2.
          - yarn versão 4.6.0 (via **Corepack**).
              - Habilitar com o comando abaixo, após instalar o Node.js:
              ``` bash
              corepack enable
              ```
      - **Tutoriais de instalação:**
        - [Como instalar o NodeJS no WINDOWS](https://www.youtube.com/watch?v=_sEwOXCKw4c)
        - [O que é o Corepack e como você pode usá-lo?](https://blog.lsantos.dev/corepack/)


  3. **Java:**
      - Versão neste projeto: openjdk 21.0.8 LTS
      - [Faça o download do Java JDK Zulu](https://www.azul.com/downloads/?os=windows&package=jdk#zulu)
      - **Tutoriais de instalação:**
        - [Instalar Java JDK 21 no Windows - OpenJDK Zulu (YouTube)](https://www.youtube.com/watch?v=wZLtazPZiDE)
        - [Documentação de instalação do site da Azul](https://docs.azul.com/core/install/windows)
      > ℹ️ **Observação:** É necessário para a geração de relatórios com o **Cypress Allure Plugin**.

  4. **Git**
      - [Faça o download do Git](https://git-scm.com/downloads)
      - **Tutoriais de instalação:** 
        - [Instalando Git e GitHub no PC - @Curso em Vídeo HTML5 e CSS3](https://www.youtube.com/watch?v=NgWExh3bswg)
        - [Git e Github Tutorial completo - Introdução prática para iniciantes](https://www.youtube.com/watch?v=_hZf1teRFNg&t=293s)

  5. **Editor de Código (IDE)**
      - [Visual Studio Code](https://code.visualstudio.com/download) ou outra IDE compatível com Cypress.
      - **Tutoriais de instalação:**
        - [Instalação do VS Code para Programação em HTML e CSS (Visual Studio Code)](https://www.youtube.com/watch?v=WyXcfCPlIlk)
        - [Instalando todas as ferramentas - @Curso em Vídeo HTML5 e CSS3](https://www.youtube.com/watch?v=UForX7ehChM)

  > ℹ️ **Observação:** O instrutor do curso indicou o uso de versões específicas. No entanto, este projeto foi testado com as versões mais recentes (Node.js, Cypress, Java e Yarn) e funcionou corretamente.

</details>

<details>
  <summary>🔹 Instalação das dependências</summary>

  Com os pré-requisitos instalados, siga estes passos para instalar as dependências do projeto:

  1. **Abra a sua ferramenta de linha de comando (CLI) e siga os passos a seguir:**

  - **Clonar o repositório via "HTTPS":**
  ```bash
    git clone https://github.com/sthefanyricardo/cypress-actions.git
  ```

  - **Acessar a pasta do projeto:**
  ```bash
    cd cypress-actions
  ```

  - **Instalar as dependências:**
  ```bash
    yarn install
  ```
    
  > ℹ️ **Observação:** O instrutor do curso indicou o uso de versões específicas. No entanto, este projeto foi testado com as versões mais recentes (Node.js e Cypress) e funcionou corretamente.

</details>

---

### 2️⃣ Execução dos testes (modos interativo e headless)

<details>
  <summary>Clique aqui para ver as instruções</summary>

  Abra o terminal na pasta principal do projeto:
  ```bash
  cd .../cypress-actions
  ```

  1. **Modo Interativo (GUI)**
  - Execute o comando para abrir a interface gráfica do Cypress:
    ```bash
    yarn cypress open
    ```
  - Na interface do Cypress:
    1. Clique em Continue
    2. Em Welcome to Cypress!, selecione E2E Testing
    3. Escolha o navegador (o padrão é Electron)
    4. Clique em Start E2E Testing in {navegador escolhido}
    5. Acesse: cypress-actions > Specs > E2E specs > cypress/e2e
      - Clique em home para executar a suíte de testes home
      - Clique em tasks para executar a suíte de testes tasks
  > ℹ️ Qualquer edição e salvamento no arquivos executa automaticamente a suíte selecionada na interface gráfica do Cypress.

  2. **Modo Headless (CLI)**
  - Executar todos os testes:
  ``` bash
  yarn cypress run
  ```
  > ℹ️ Executa todos os testes da pasta cypress/e2e em modo headless.

  - Executar testes em navegador específico:
  ``` bash
  yarn cypress run --browser chrome
  ```
  > ℹ️ Os resultados são exibidos diretamente no terminal.

  - Gerar vídeos da execução:
  No arquivo cypress.config.js, adicione a opção:
  ``` javascript
    module.exports = {
      e2e: {
        video: true
      },
    };
  ```

  > ℹ️ Após isso, os [vídeos serão gravados automaticamente ](https://docs.cypress.io/app/guides/screenshots-and-videos) na pasta padrão do Cypress, nas execuções em modo headless.


  3. **Modo Headless com Relatório Allure Report**
  - Execute os testes gerando o relatório com o [Cypress Allure Plugin](https://github.com/Shelex/cypress-allure-plugin):
  ```bash
  yarn cypress run --env allure=true
  ```

</details>

---

## 📌 Agradecimentos

- Ao instrutor **Fernando Papito** pelo curso e compartilhamento de conhecimento.
- À comunidade de automação de testes por todo o suporte e inspiração.
- **Observações:**  
  - Este repositório é destinado a fins educacionais para demonstrar conceitos da execução de testes automatizados Cypress com o Github Actions.  
  - Sinta-se à vontade para clonar, modificar e utilizar este código como base para seus próprios projetos.  

---

## 🙋‍♀️ Autora

Feito com ❤️ por **Sthefany A. Ricardo**.

- Este `README.md` foi gerado com a assistência de modelos de linguagem como o Google Gemini e o ChatGPT, para garantir clareza, formatação e um conteúdo completo.
