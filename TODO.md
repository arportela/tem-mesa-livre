# Lista de tarefas:

## PREPARAÇÃO

**BACKEND - CRIAR CAMADA DE API**

  - [x] Criar projeto do tipo *WEBAPI2* no Visual Studio 2017
  - [x] Configurar OAuth
  - [x] Configurar Ninject
  - [x] Implementar pattern *DEPENDENCY INJECTION*
  - [x] Configurar AutoMapper
  - [x] Configurar demais dependências
  - [x] Versionar projeto no Github
  
**BACKEND - CRIAR CAMADA DE APPLICATION**

 - [x] Criar projeto do tipo *CLASS LIBRARY* no Visual Studio 2017
 - [x] Definir estrutura da camada
 - [x] Configurar dependências
 - [x] Versionar projeto no Github
 
**BACKEND - CRIAR CAMADA DE DATA**

 - [x] Criar projeto do tipo *CLASS LIBRARY* no Visual Studio 2017
 - [x] Configurar Entity Framework
 - [x] Configurar repositório base
 - [x] Versionar projeto no Github

**BACKEND - CRIAR CAMADA DE DOMAIN**

 - [x] Criar projeto do tipo *CLASS LIBRARY* no Visual Studio 2017
 - [x] Definir entidades
 - [ ] Implementar pattern *VALIDATION*
 - [ ] Implementar pattern *SPECIFICATION*
 - [x] Versionar projeto no Github
 
 **BACKEND - CRIAR CAMADA DE GLOBALIZAÇÃO**
 
 - [x] Criar projeto do tipo *CLASS LIBRARY* no Visual Studio 2017
 - [x] Versionar projeto no Github
 
**FRONTEND - CRIAR APLICAÇÃO ANGULAR 5**

 - [x] Criar projeto do tipo *Typescript* no Visual Studio 2017
 - [x] Criar aplicação padrão pelo Angular CLI
 - [x] Adicionar biblioteca *bootstrap* para estilos
 - [x] Adicionar biblioteca *ngx-popover* para utilização de popover
 - [x] Adicionar biblioteca *ngx-bootstrap* para utilização de modais
 - [x] Versionar projeto no Github
 
**INFRAESTRUTURA**

 - [x] Configurar projetos backend para publicação
 - [x] Configurar projetos frontend para publicação
 - [x] Criar aplicações web no Azure
 - [x] Fazer upload das aplicações na nuvem

**FRONTEND PASSIVO TECNICO**

 - [ ] Criar specification para campos obrigatórios
 - [ ] Criar specification para tamanho máximo de campo
 - [ ] Criar api para envio de email
 - [ ] Criar api para a realização de pagamento

**FRONTEND PASSIVO TECNICO**

 - [x] Criar componente para exibição de mensagens na tela
 - [x] Criar componente para gerenciar eventos
 - [x] Criar *guard* para redirecionar o usuário logado às suas respectivas funcionalidades
 - [x] Criar *guard* para redirecionar o usuário não logado para a tela de login
 - [x] Criar cabeçalho da aplicação com logo
 - [x] Criar máscara para CNPJ
 - [x] Criar máscara para CPF
 - [x] Criar máscara para Data
 - [x] Criar máscara para Números (cross browser)
 - [x] Criar máscara para RG
 - [x] Criar máscara para Telefone
 - [x] Criar máscara para Hora
 - [x] Criar pipe para Hora
 - [x] Criar serviço para gerenciar sessões de usuário
 - [x] Criar validação para CNPJ
 - [x] Criar validação para CPF
 - [x] Criar validação para E-mail (crossbworser)
 - [x] Criar validação para Senha
 - [x] Criar validação de senha igual à outro campo de senha
 - [x] Criar validação para RG
 - [x] Criar validação para Telefone
 - [x] Criar validação para Hora
 - [ ] Criar validação para upload de imagens
 - [ ] Criar validação de data maior que outra data
 - [ ] Criar validação de horário maior que outro horário
 - [ ] Criar componente para visualização e upload de imagem
 - [ ] Criar componente para realização de pagamento
 - [ ] Aplicar lazy loading para as rotas a nível de módulo
 - [x] Definir estrutura HTML padrão para formulários
 - [ ] Criar componente para globalização

## TELA INICIAL

**FRONTEND**

 - [x] Criar novo componente *start.component*
 - [x] Desenvolver template HTML+CSS
 - [x] Desenvolver lógica do componente
 - [x] Criar mapeamento de rotas

## TELA DE LOGIN

**BACKEND**

 - [x] Criar entidade *UsuarioEntity* (Domain)
 - [x] Criar controller *UsuarioController* (API)
 - [x] Criar classes de service, request e response (APPLICATION)
 - [x] Configurar entidade no *AutoMapper* (API)
 - [x] Configurar classes no *Ninject* (API)
 - [x] Criar *Mapping* para configuração de tabela no banco de dados (DATA)
 - [x] Criar repository *UsuarioRepository* (DATA)
 - [ ] Criar validation
 - [ ] Globalizar textos

**FRONTEND**

- [x] Criar novo componente *login.component*
- [x] Desenvolver template HTML+CSS
- [x] Desenvolver lógica do componente
- [x] Criar mapeamento de rotas

## TELA DE CADASTRO

**BACKEND**

 - [x] Adidionar método *Create* em *UsuarioController* (API)
 - [x] Adicionar método *Create* no service (APPLICATION)
 - [x] Adicionar método *Create* "UsuarioRepository" (DATA)
 - [ ] Globalizar textos

**FRONTEND**

- [x] Criar novo componente *cadastro.component*
- [x] Desenvolver template HTML+CSS
- [x] Desenvolver lógica do componente
- [x] Criar service para comunicação com API
- [x] Criar mapeamento de rotas

## TELA DE RECUPERAÇÃO DE SENHA

**BACKEND**

 - [x] Adidionar método *UpdateSenha* em *UsuarioController* (API)
 - [x] Adicionar método *UpdateSenha* no service (APPLICATION)
 - [x] Adicionar método *GetByEmail* "UsuarioRepository" (DATA)
 - [ ] Globalizar textos

**FRONTEND**

- [x] Criar novo componente *recuperar-senha.component*
- [x] Desenvolver template HTML+CSS
- [x] Desenvolver lógica do componente
- [x] Criar service para comunicação com API
- [x] Criar mapeamento de rotas

## TELA DE LOCAIS

**BACKEND**

 - [x] Criar entidade *LocaisEntity* (Domain)
 - [x] Criar controller *LocaisController* (API)
 - [x] Criar classes de service, request e response (APPLICATION)
 - [x] Configurar entidade no *AutoMapper* (API)
 - [x] Configurar classes no *Ninject* (API)
 - [x] Criar *Mapping* para configuração de tabela no banco de dados (DATA)
 - [x] Criar repository *LocaisRepository* (DATA)
 - [ ] Criar validation
 - [ ] Globalizar textos

**FRONTEND**

- [x] Criar novo componente *locais-consultar.component*
- [x] Desenvolver template HTML+CSS para *locais-consultar*
- [x] Desenvolver lógica do componente *locais-consultar*
- [x] Criar novo componente *locais-alterar.component*
- [x] Desenvolver template HTML+CSS para *locais-alterar*
- [x] Desenvolver lógica do componente *locais-alterar*
- [x] Criar novo componente *locais-alterar.criar*
- [x] Desenvolver template HTML+CSS para *locais-criar*
- [x] Desenvolver lógica do componente *locais-criar*
- [x] Criar novo componente *locais-alterar.excluir*
- [x] Desenvolver template HTML+CSS para *locais-excluir*
- [x] Desenvolver lógica do componente *locais-excluir
- [x] Criar novo modal *locais-manter.modal.criar* para adicionar mais de um período por local
- [x] Desenvolver template HTML+CSS para *locais-manter.modal.criar*
- [x] Desenvolver lógica do componente *locais-manter.modal.criar**
- [x] Criar service para comunicação com API
- [x] Criar mapeamento de rotas
