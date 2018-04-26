using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain.Entities;
using TemMesaLivre.Domain.Shared.Specification;
using TemMesaLivre.Domain.Shared.Validation;
using TemMesaLivre.Globalization;

namespace TemMesaLivre.Domain.Validation
{
    public class UsuarioValidation: Validation<UsuarioEntity>
    {
        private const int maxLengthNome = 50;

        public UsuarioValidation()
        {
            AddRule(new MaxLengthSpec<UsuarioEntity>(_ => _.Nome, maxLengthNome),
                Messages.ERRO_GENERICO_CAMPO_EXCEDE_LIMITE_CARACTERES.Fill(Labels.USUARIO_NOME));
        }
    }
}
