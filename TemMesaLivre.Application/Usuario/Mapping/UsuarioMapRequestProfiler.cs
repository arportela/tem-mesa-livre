using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Application.Usuario.Mapping
{
    public class UsuarioMapRequestProfiler : Profile
    {
        public UsuarioMapRequestProfiler()
        {
            CreateMap<UsuarioRequest, UsuarioEntity>();
            CreateMap<UsuarioEntity, UsuarioResponse>();
        }
    }
}
