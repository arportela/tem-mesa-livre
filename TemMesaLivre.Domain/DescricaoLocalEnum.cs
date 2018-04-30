using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace TemMesaLivre.Domain
{
    public enum DescricaoLocalEnum
    {
        [Description("Sala")]
        Sala = 1,
        [Description("Sala de reunião")]
        SalaReuniao = 2,
        [Description("Sala com videoconferência")]
        SalaVideoCOnferencia = 3,
        [Description("Lounge")]
        Lounge = 4
    }
}
