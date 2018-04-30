using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Mapping
{
    public class PeriodoMapping : EntityTypeConfiguration<PeriodoVO>, IMapping
    {
        public PeriodoMapping()
        {
            HasKey(_ => _.Id);
        }
    }
}
