# Observações e dúvidas

1 - Nas seções 13, 14 e 15 da documentação fornecida contendo os requisitos do aplicativo, são mencionadas funcionalidades específicas para dispositivos móveis (como alertas na tela do celular), pelo fato da solução escolhida ser um aplicativo web, caso seja do interesse do cliente, pode-se adequar a solução para funcionar de forma responsiva através do navegador em dispositivos móveis. Como a solução utiliza arquitetura de microserviços, nada impede do cliente também optar pelo desenvolvimento de um aplicativo para smartphone que consuma os serviços já existentes.

2 - Na tela de cadastro de usuários, existem algumas validações que, apesar de não estarem descritas no documento de requisitos, são necessárias para o bom funcionamento do sistema:
  - Nome de usuário possuir um tamanho mínimo e máximo
  - Nome do usuário ser único no banco de dados por tipo de usuário (administrador, rh e profissional)
  - Email ser único no banco de dados por tipo de usuário (administrador, rh e profissional)
  - Senha possuir um tamanho mínimo e máximo
  - Razão social possuir um tamanho máximo
  
3 - Há uma necessidade de uma melhor definição dos campos que são obrigatórios ou não nas telas.

4 - Como a aplicação lida com dados sensíveis, é extremamente recomendável a utilização de certificado digital.

5 - A implemementação de testes unitários e integrados não foi feita na primeira entrega devido ao prazo dado para a mesma, já que não se tratava de um prazo negociável
