using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TemMesaLivre.Application.Usuario.Mapping;

namespace TemMesaLivre.WebAPI.App_Start
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            AutoMapper.Mapper.Initialize(_ => {
                _.AddProfile(new UsuarioMapRequestProfiler());
            });
        }
    }
}