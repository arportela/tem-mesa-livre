using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TemMesaLivre.Domain.Shared.Entities;

namespace TemMesaLivre.Data.Shared.Repository
{
    public interface IRepositoryBase<TEntity> where TEntity : EntityBase
    {
        IQueryable<TEntity> GetAll();
        TEntity GetById(Guid id);
        void Create(TEntity entity);
        void Update(TEntity entity);
        void Delete(Guid id);
        void SaveChanges();
    }
}
