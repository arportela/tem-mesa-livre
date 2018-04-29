using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Application.Usuario
{
    public class UsuarioResponse
    {
        public Guid Id { get; set; }
        public string NomeUsuario { get; set; }
        public string RazaoSocial { get; set; }
        public string CNPJ { get; set; }
        public string RG { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Celular { get; set; }
        public string Nome { get; set; }
        public int Tipo { get; set; }
    }
}
