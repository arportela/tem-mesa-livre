using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Application.Local.Mapping
{
    public class LocalMapRequestProfiler : Profile
    {
        public LocalMapRequestProfiler()
        {
            CreateMap<LocalRequest, LocalEntity>();
            CreateMap<LocalEntity, LocalResponse>();
            CreateMap<PeriodoDTO, PeriodoVO>();
            CreateMap<PeriodoVO, PeriodoDTO>();
        }
    }
}
