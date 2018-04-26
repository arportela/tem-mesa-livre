using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Application.Usuario
{
    public class UsuarioRequest
    {
        public string Nome { get; set; }
        public int Tipo { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
    }
}
