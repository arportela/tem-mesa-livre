using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain.Shared.Entities;

namespace TemMesaLivre.Domain.Entities
{
    public class PeriodoVO: EntityBase
    {
        public string HorarioInicial { get; set; }
        public string HorarioFinal { get; set; }
    }
}
