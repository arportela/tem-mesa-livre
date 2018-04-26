using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Application.Usuario
{
    public interface IUsuarioService
    {
        List<UsuarioResponse> GetUsuarios();
        Guid Create(UsuarioRequest request);
    }
}
