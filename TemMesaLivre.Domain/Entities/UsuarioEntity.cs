using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TemMesaLivre.Domain.Shared.Entities;

namespace TemMesaLivre.Domain.Entities
{
    public class UsuarioEntity : EntityBase
    {
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
