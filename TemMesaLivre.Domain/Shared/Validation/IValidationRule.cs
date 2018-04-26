using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Domain.Shared.Validation
{
    public interface IValidationRule<in TEntity>
    {
        string ErrorMessage { get; }
        bool Valid(TEntity entity);
    }
}
