using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain;

namespace TemMesaLivre.Application.Local
{
    public class LocalRequest
    {
        public Guid Id { get; set; }
        public DescricaoLocalEnum Descricao { get; set; }
        public string Endereco { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public int QtdMesas { get; set; }
        public int QtdCadeiras { get; set; }
        public decimal CustoPorHora { get; set; }
        public string DataInicial { get; set; }
        public string DataFinal { get; set; }
        public List<PeriodoDTO> Periodos { get; set; }
    }
}
