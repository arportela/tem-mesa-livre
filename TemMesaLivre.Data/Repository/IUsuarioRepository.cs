using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Data.Shared.Repository;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Repository
{
    public interface IUsuarioRepository: IRepositoryBase<UsuarioEntity>
    {
        UsuarioEntity GetByLoginAndPassword(string login, string senha, int role);
        UsuarioEntity GetByEmailAndRole(string email, int role);
        UsuarioEntity GetByEmail(string email);
    }
}
