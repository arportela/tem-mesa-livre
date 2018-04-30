# Lista de tarefas:

## DOCUMENTAÇÃO

- [x] Criar arquivo README.md com a lista de documentos no repositório
- [x] Criar mapa de funcionalidades
- [x] Criar arquivo TODO.md com as tarefas a serem desenvolvidas e estimativa em horas
- [x] Criar arquivo ARCHITECTURE.md listando todas as tecnologias planejadas para esta solução
- [ ] Criar roteiro de testes unitários para Backend
- [ ] Criar roteiro de testes unitários para Frontend
- [ ] Criar roteiro de testes integrados

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
 - [ ] Configurar service de envio de E-mail no Azure
 - [ ] Configurar service de pagamento no Azure

**BACKEND PASSIVO TÉCNICO**

 - [ ] Criar specification para campos obrigatórios
 - [ ] Criar specification para tamanho máximo de campo
 - [ ] Criar specification para validação de CNPJ
 - [ ] Criar specification para validação de CPF
 - [ ] Criar specification para validação de Email
 - [ ] Criar specification para validação de RG
 - [ ] Criar specification para validação de Telefone
 - [ ] Criar specification para validação de Imagens
 - [ ] Criar specification para validação de intervalo de datas
 - [ ] Criar specification para validação de intervalo de horários
 - [ ] Criar api para envio de email
 - [ ] Criar api para a realização de pagamento

**FRONTEND PASSIVO TÉCNICO**

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
 - [ ] Criar validação para intervalo de datas
 - [ ] Criar validação para intervalo de horários
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
- [x] Fazer integração com backend

## TELA DE CADASTRO

**BACKEND**

 - [x] Adidionar método *Create* em *UsuarioController* (API)
 - [x] Adicionar método *Create* no service (APPLICATION)
 - [x] Adicionar método *Create* em *UsuarioRepository* (DATA)
 - [ ] Globalizar textos

**FRONTEND**

- [x] Criar novo componente *cadastro.component*
- [x] Desenvolver template HTML+CSS
- [x] Desenvolver lógica do componente
- [x] Criar service para comunicação com API
- [x] Criar mapeamento de rotas
- [x] Fazer integração com backend

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
- [x] Fazer integração com backend

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
- [x] Criar novo componente *locais-criar.component*
- [x] Desenvolver template HTML+CSS para *locais-criar*
- [x] Desenvolver lógica do componente *locais-criar*
- [x] Criar novo componente *locais-excluir.component*
- [x] Desenvolver template HTML+CSS para *locais-excluir*
- [x] Desenvolver lógica do componente *locais-excluir*
- [x] Criar novo modal *locais-manter.modal.component* para adicionar mais de um período por local
- [x] Desenvolver template HTML+CSS para *locais-manter.modal.component*
- [x] Desenvolver lógica do componente *locais-manter.modal.component*
- [ ] Criar service para comunicação com API
- [x] Criar mapeamento de rotas
- [ ] Fazer integração com backend

## TELA DE PROFISSIONAIS

**BACKEND**

 - [ ] Criar entidade *ProfissionalEntity* (Domain)
 - [ ] Criar controller *ProfissionalController* (API)
 - [ ] Criar classes de service, request e response (APPLICATION)
 - [ ] Configurar entidade no *AutoMapper* (API)
 - [ ] Configurar classes no *Ninject* (API)
 - [ ] Criar *Mapping* para configuração de tabela no banco de dados (DATA)
 - [ ] Criar repository *ProfissionalRepository* (DATA)
 - [ ] Criar validation
 - [ ] Globalizar textos

**FRONTEND**

- [ ] Criar novo componente *profissional-consultar.component*
- [ ] Desenvolver template HTML+CSS para *profissional-consultar*
- [ ] Desenvolver lógica do componente *profissional-consultar*
- [ ] Criar novo componente *profissional-alterar.component*
- [ ] Desenvolver template HTML+CSS para *profissional-alterar*
- [ ] Desenvolver lógica do componente *profissional-alterar*
- [ ] Criar novo componente *profissional-alterar.component*
- [ ] Desenvolver template HTML+CSS para *profissional-excluir*
- [ ] Desenvolver lógica do componente *profissional-excluir*
- [ ] Criar service para comunicação com API
- [ ] Criar mapeamento de rotas

## PESQUISA DE PROFISSIONAIS

**FRONTEND**
- [ ] Criar componente de pesquisa para adicionar à tela de *profissional-consultar*
- [ ] Criar novo componente *profissional-detalhar.component*
- [ ] Desenvolver template HTML+CSS para *profissional-detalhar*
- [ ] Desenvolver lógica do componente *profissional-detalhar*

## PESQUISA DE LOCAIS

**FRONTEND**
- [ ] Criar componente de pesquisa para adicionar à tela de *locais-consultar*
- [ ] Criar novo componente *locais-detalhar.component*
- [ ] Desenvolver template HTML+CSS para *locais-detalhar*
- [ ] Desenvolver lógica do componente *locais-detalhar*

## TELA DE RESERVAS

**BACKEND**

 - [ ] Criar entidade *reservasEntity* (Domain)
 - [ ] Criar controller *reservasController* (API)
 - [ ] Criar classes de service, request e response (APPLICATION)
 - [ ] Configurar entidade no *AutoMapper* (API)
 - [ ] Configurar classes no *Ninject* (API)
 - [ ] Criar *Mapping* para configuração de tabela no banco de dados (DATA)
 - [ ] Criar repository *ReservasRepository* (DATA)
 - [ ] Criar validation
 - [ ] Globalizar textos

**FRONTEND**

- [ ] Criar novo componente *locais-reservar.component*
- [ ] Desenvolver template HTML+CSS para *locais-reservar*
- [ ] Desenvolver lógica do componente *locais-reservar*
- [ ] Criar novo componente *reservas-consultar.component*
- [ ] Desenvolver template HTML+CSS para *locais-consultar*
- [ ] Desenvolver lógica do componente *locais-consultar*
- [ ] Criar novo componente *locais-detalhar.component*
- [ ] Desenvolver template HTML+CSS para *locais-detalhar*
- [ ] Desenvolver lógica do componente *locais-detalhar*
- [ ] Criar novo componente *locais-pagar.component*
- [ ] Desenvolver template HTML+CSS para *locais-pagar*
- [ ] Desenvolver lógica do componente *locais-pagar*
- [ ] Criar novo componente *locais-aprovar.component*
- [ ] Desenvolver template HTML+CSS para *locais-aprovar*
- [ ] Desenvolver lógica do componente *locais-aprovar*
- [ ] Criar novo componente *locais-rejeitar.component*
- [ ] Desenvolver template HTML+CSS para *locais-rejeitar*
- [ ] Desenvolver lógica do componente *locais-rejeitar*
- [ ] Criar service para comunicação com API
- [ ] Criar mapeamento de rotas

## TESTES UNITÁRIOS

**BACKEND**

 - [ ] Criar teste para specification de campos obrigatórios
 - [ ] Criar teste para specification de tamanho máximo de campo
 - [ ] Criar teste para specification de validação de CNPJ
 - [ ] Criar teste para specification de validação de CPF
 - [ ] Criar teste para specification de validação de Email
 - [ ] Criar teste para specification de validação de RG
 - [ ] Criar teste para specification de validação de Telefone
 - [ ] Criar teste para specification de validação de Imagens
 - [ ] Criar teste para specification de validação de intervalo de datas
 - [ ] Criar teste para specification de validação de intervalo de horários
 - [ ] Criar teste para api de envio de email
 - [ ] Criar teste para api de realização de pagamento
 - [ ] Criar testes para os métodos da controller Usuario (API)
 - [ ] Criar testes para os métodos da controller Locais (API)
 - [ ] Criar testes para os métodos da controller Reservas (API)
 - [ ] Criar testes para os métodos do service Usuario (API)
 - [ ] Criar testes para os métodos do service Locais (API)
 - [ ] Criar testes para os métodos do service Reservas (API)
 - [ ] Criar testes para os métodos do repository Usuario (API)
 - [ ] Criar testes para os métodos do repository Locais (API)
 - [ ] Criar testes para os métodos do repository Reservas (API)
 - [ ] Criar testes para o validation Usuario (API)
 - [ ] Criar testes para o validation Locais (API)
 - [ ] Criar testes para o validation Reservas (API)

**FRONTEND**

 - [ ] Criar teste para componente de exibição de mensagens na tela
 - [ ] Criar teste para componente de gerenciamento de eventos
 - [ ] Criar teste para *guard* de redirecionar de usuário logado às suas respectivas funcionalidades
 - [ ] Criar teste para *guard* de redirecionamento de usuário não logado para a tela de login
 - [ ] Criar teste para cabeçalho da aplicação com logo
 - [ ] Criar teste para máscara de CNPJ
 - [ ] Criar teste para máscara de CPF
 - [ ] Criar teste para máscara de Data
 - [ ] Criar teste para máscara de Números (cross browser)
 - [ ] Criar teste para máscara de RG
 - [ ] Criar teste para máscara de Telefone
 - [ ] Criar teste para máscara de Hora
 - [ ] Criar teste para pipe de Hora
 - [ ] Criar teste para serviço de gerenciamento de sessões de usuário
 - [ ] Criar teste para validação de CNPJ
 - [ ] Criar teste para validação de CPF
 - [ ] Criar teste para validação de E-mail (crossbworser)
 - [ ] Criar teste para validação de Senha
 - [ ] Criar teste para validação de senha igual à outro campo de senha
 - [ ] Criar teste para validação de RG
 - [ ] Criar teste para validação de Telefone
 - [ ] Criar teste para validação de Hora
 - [ ] Criar teste para validação de upload de imagens
 - [ ] Criar teste para validação de intervalo de datas
 - [ ] Criar teste para validação de intervalo de horários
 - [ ] Criar teste para componente de visualização e upload de imagem
 - [ ] Criar teste para componente de realização de pagamento
 - [ ] Criar teste para lazy loading de rotas
 - [ ] Criar teste para componente de globalização
 - [ ] Criar teste para os métodos do componente *start.component*
 - [ ] Criar teste para os métodos do componente *login.component*
 - [ ] Criar teste para os métodos do componente *cadastro.component*
 - [ ] Criar teste para os métodos do componente *recuperar-senha.component*
 - [ ] Criar teste para os métodos do componente *locais-consultar.component*
 - [ ] Criar teste para os métodos do componente *locais-criar.component*
 - [ ] Criar teste para os métodos do componente *locais-alterar.component*
 - [ ] Criar teste para os métodos do componente *locais-detalhar.component*
 - [ ] Criar teste para os métodos do componente *locais-excluir.component*
 - [ ] Criar teste para os métodos do componente *locais-detalhar.component*
 - [ ] Criar teste para os métodos do componente *profissionais-consultar.component*
 - [ ] Criar teste para os métodos do componente *profissionais-alterar.component*
 - [ ] Criar teste para os métodos do componente *profissionais-excluir.component*
 - [ ] Criar teste para os métodos do componente *profissionais-detalhar.component*
 - [ ] Criar teste para os métodos do componente *reservas-consultar.component*
 - [ ] Criar teste para os métodos do componente *reservas-detalhar.component*
 - [ ] Criar teste para os métodos do componente *reservas-pagar.component*
 - [ ] Criar teste para os métodos do componente *reservas-aprovar.component*
 - [ ] Criar teste para os métodos do componente *reservas-rejeitar.component*

## TESTES INTEGRADOS (implementação em DEV com protractor)
**Não contemplam testes funcionais executados por analistas**

 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login de administrador pela tela inicial*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login de RH pela tela inicial*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login de profissional pela tela inicial*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login de administrador pela url -/administrador/login-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login de RH pela url -/rh/login-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login de profissional pela url -/profissional/login-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de cadastro de administrador pelo link da tela de login*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de cadastro de rh pelo link da tela de login*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de cadastro de profissional pelo link da tela de login*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de cadastro de administrador pela url -/administrador/cadastro-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de cadastro de rh pela url -/rh/cadastro-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de cadastro de profissional pela url -/profissional/cadastro-* 
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de recuperação de senha de administrador pelo link da tela de login*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de recuperação de senha de rh pelo link da tela de login*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de recuperação de senha de profissional pelo link da tela de login*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de recuperação de senha de administrador pela url -/administrador/recuperar-senha-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de recuperação de senha de rh pela url -/rh/recuperar-senha-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de recuperação de senha de profissional pela url -/profissional/recuperar-senha-*
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de início ao clicar no botão -voltar- da tela de login
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login como administrador ao clicar no botão -voltar- da tela de cadastro de administrador
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login como rh ao clicar no botão -voltar- da tela de cadastro de rh
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login como profissional ao clicar no botão -voltar- da tela de cadastro de profissional
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login como administrador ao clicar no botão -cancelar- da tela de recuperar senha de administrador
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login como rh ao clicar no botão -cancelar- da tela de recuperar senha de rh
 - [ ] Criar teste para o caso de uso: *O usuário deve conseguir acessar a tela de login como profissional ao clicar no botão -cancelar- da tela de recuperar senha de profissional
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de login caso não preencha o campo -Nome de usuário-*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de login caso não preencha o campo -Senha-*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de login caso a senha informada não possua pelo menos um número, uma letra e um caractere especial*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de login caso o nome de usuário e senha sejam inválidos*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -Nome de usuário-* 
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -Razão Social- se cadastrando como Administrador*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -Razão Social- se cadastrando como RH*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -CNPJ- se cadastrando como Administrador*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -CNPJ- se cadastrando como RH*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -E-mail-* 
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -Senha-* 
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -Nome- se cadastrando como profissional*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -Número do celular- se cadastrando como profissional*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -CPF- se cadastrando como profissional*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso não preencha o campo -RG- se cadastrando como profissional*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso o CNPJ informado seja inválido*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso o E-mail informado seja inválido*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso a Senha informada não contenha pelo menos uma letra, um número e um caractere especial*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso o Número de celular informado seja inválido*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso o CPF informado seja inválido*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de cadastro caso o RG informado seja inválido*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de recuperar senha caso o Email informado seja inválido*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de recuperar senha de administrador caso o Email informado não seja encontrado na base com o tipo de usuário administrador associado*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de recuperar senha de rh caso o Email informado não seja encontrado na base com o tipo de usuário rh associado*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de recuperar senha de profissional caso o Email informado não seja encontrado na base com o tipo de usuário profissional associado*
 - [ ] Criar teste para o caso de uso: *O usuário deve receber um alerta na tela de recuperar senha informando que ele recebeu um e-mail com instruções para a recuperação de senha caso o email informado seja encontrado na base*
 - [ ] Criar teste para o caso de uso: *O usuário deve ser redirecionado para a tela de -locais-consultar- caso efetue login como administrador*
 - [ ] Criar teste para o caso de uso: *O usuário deve poder acessar a tela de -locais-consultar- quando logado através do menu superior direito*
 - [ ] Criar teste para o caso de uso: *O usuário deve poder acessar a tela de -locais-consultar- quando logado como administrador através da url -administrador/locais/consultar-*
 
 [TODO: Mudar os testes integrados para documento específico]
