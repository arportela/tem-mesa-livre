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
        public string Nome { get; set; }
        public int Tipo { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
    }
}
