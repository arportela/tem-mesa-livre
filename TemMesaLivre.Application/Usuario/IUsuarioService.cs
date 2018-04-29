using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Application.Usuario
{
    public interface IUsuarioService
    {
        List<UsuarioResponse> GetAll();
        Guid Create(UsuarioRequest request);

        bool CheckEmail(UsuarioRequest request);

        Guid UpdateSenha(UsuarioRequest request);
    }
}
