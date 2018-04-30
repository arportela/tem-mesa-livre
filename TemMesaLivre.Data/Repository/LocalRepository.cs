using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using TemMesaLivre.Data.Shared.Repository;
using TemMesaLivre.Domain.Entities;
using TemMesaLivre.Domain.Shared.Repository;

namespace TemMesaLivre.Data.Repository
{
    public class LocalRepository : RepositoryBase<LocalEntity>, ILocalRepository
    {
        public LocalRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public override IQueryable<LocalEntity> GetAll()
        {
            return base.GetAll().Include(_ => _.Periodos);
        }
    }
}
