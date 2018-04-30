using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain.Shared.Entities;

namespace TemMesaLivre.Domain.Entities
{
    public class LocalEntity : EntityBase
    {
        public DescricaoLocalEnum Descricao { get; set; }
        public string Endereco { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public int QtdMesas { get; set; }
        public int QtdCadeiras { get; set; }
        public decimal CustoPorHora { get; set; }
        public string DataInicial { get; set; }
        public string DataFinal { get; set; }
        public List<PeriodoVO> Periodos { get; set; }
    }
}
