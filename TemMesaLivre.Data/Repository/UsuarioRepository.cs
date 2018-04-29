using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TemMesaLivre.Domain.Entities;
using TemMesaLivre.Domain.Shared.Repository;

namespace TemMesaLivre.Data.Repository
{
    public class UsuarioRepository : RepositoryBase<UsuarioEntity>, IUsuarioRepository
    {
        public UsuarioRepository(DatabaseContext dbContext) : base(dbContext)
        {            
        }

        public UsuarioEntity GetByEmail(string email)
        {
            return _dbContext.Set<UsuarioEntity>().FirstOrDefault(_ => _.Email == email);
        }

        public UsuarioEntity GetByEmailAndRole(string email, int role)
        {
            return _dbContext.Set<UsuarioEntity>().FirstOrDefault(_ => _.Email == email && _.Tipo == role);
        }

        public UsuarioEntity GetByLoginAndPassword(string login, string senha, int role)
        {
            return _dbContext.Set<UsuarioEntity>().FirstOrDefault(_ => _.NomeUsuario == login && _.Senha == senha && _.Tipo == role);
        }

    }
}
