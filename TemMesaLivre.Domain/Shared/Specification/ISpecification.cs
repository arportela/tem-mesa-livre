using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using TemMesaLivre.Domain.Shared.Entities;

namespace TemMesaLivre.Domain.Shared.Specification
{
    public interface ISpecification<TEntity> where TEntity : class
    {
        Expression<Func<TEntity, bool>> Predicate { get; }
        bool IsSatisfiedBy(TEntity entity);
    }
}
