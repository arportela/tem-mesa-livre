using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Data.Repository.Shared;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Repository
{
    public interface IUsuarioRepository: IRepositoryBase<UsuarioEntity>
    {
        UsuarioEntity GetByLoginAndPassword(string login, string senha);
    }
}
