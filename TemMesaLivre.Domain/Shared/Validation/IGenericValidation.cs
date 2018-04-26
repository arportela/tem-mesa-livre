using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Domain.Shared.Validation
{
    public interface IGenericValidation<TEntity>: IValidation
    {
        Dictionary<string, IValidationRule<TEntity>> Rules { get; }
        ValidationResult Validate(TEntity entity);
        void ThrowIfInvalid(TEntity entity);
    }
}
