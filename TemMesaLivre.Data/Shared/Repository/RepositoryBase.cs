using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using TemMesaLivre.Data;
using TemMesaLivre.Data.Shared.Repository;
using TemMesaLivre.Domain.Shared.Entities;

namespace TemMesaLivre.Domain.Shared.Repository
{
    public class RepositoryBase<TEntity> : IDisposable, IRepositoryBase<TEntity> where TEntity : EntityBase
    {
        protected DatabaseContext _dbContext;
        public RepositoryBase(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Create(TEntity entity)
        {
            _dbContext
                .Set<TEntity>()
                .Add(entity);
        }

        public void Delete(Guid id)
        {
            _dbContext
                .Set<TEntity>()
                .Where(_ => _.Id == id)
                .ToList()
                .ForEach(_ => _dbContext.Set<TEntity>()
                .Remove(_));
        }

        public IQueryable<TEntity> GetAll()
        {
            return _dbContext.Set<TEntity>();
        }

        public TEntity GetById(Guid id)
        {
            return _dbContext.Set<TEntity>().FirstOrDefault(_ => _.Id == id);
        }

        public void Update(TEntity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}
