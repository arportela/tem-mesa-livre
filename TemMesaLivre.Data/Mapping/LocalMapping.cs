using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Mapping
{
    public class LocalMapping : EntityTypeConfiguration<LocalEntity>, IMapping
    {
        public LocalMapping()
        {
            HasKey(_ => _.Id);
            HasMany(_ => _.Periodos)
                .WithRequired();            
        }
    }
}
