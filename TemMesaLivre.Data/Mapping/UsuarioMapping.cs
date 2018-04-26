using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Text;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Mapping
{
    public class UsuarioMapping : EntityTypeConfiguration<UsuarioEntity>, IMapping
    {
        public UsuarioMapping()
        {
            HasKey(_ => _.Id);
        }
    }
}
