using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public DbSet<UsuarioEntity> Usuarios { get; set; }
    }
}
