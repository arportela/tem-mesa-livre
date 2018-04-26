using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain.Entities;
using TemMesaLivre.Domain.Shared.Validation;
using TemMesaLivre.Domain.Validation;

namespace TemMesaLivre.Domain.Extensions
{
    public static class UsuarioValidationExtensions
    {
        public static ValidationResult Validate(this UsuarioEntity entity)
        {
            var validation = new UsuarioValidation();
            return validation.Validate(entity);
        }

        public static void ThrowIfInvalid(this UsuarioEntity entity)
        {
            var validation = new UsuarioValidation();
            validation.ThrowIfInvalid(entity);
        }
    }
}
