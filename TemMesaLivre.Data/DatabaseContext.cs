using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Text;
using TemMesaLivre.Domain;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data
{
    public class DatabaseContext : DbContext, IDatabaseContext
    {
        public DatabaseContext() : base("TemMesaLivre")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<UsuarioEntity>().ToTable("Usuarios");
            modelBuilder.Entity<LocalEntity>().ToTable("Locais");
            modelBuilder.Entity<PeriodoVO>().ToTable("Periodos");
        }

        public DbSet<UsuarioEntity> Usuarios { get; set; }
        public DbSet<LocalEntity> Locais { get; set; }
    }
}
