using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TemMesaLivre.Data.Repository.Shared;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Repository
{
    public class UsuarioRepository : RepositoryBase<UsuarioEntity>, IUsuarioRepository
    {
        public UsuarioRepository(DatabaseContext dbContext) : base(dbContext)
        {            
        }
        public UsuarioEntity GetByLoginAndPassword(string login, string senha)
        {
            return _dbContext.Set<UsuarioEntity>().FirstOrDefault(_ => _.Login == login && _.Senha == senha);
        }
    }
}
