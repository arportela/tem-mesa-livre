﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TemMesaLivre.Application.Usuario;

namespace TemMesaLivre.Application.UnitTest.Mock
{
    public class UsuarioServiceMock : IUsuarioService
    {
        public Guid Create(UsuarioRequest request)
        {
            throw new NotImplementedException();
        }

        public List<UsuarioResponse> GetUsuarios()
        {
            return new List<UsuarioResponse> {
                new UsuarioResponse
                {
                    Nome = "Ana Baiana Meleva Daqui Prapraia",
                    Tipo = 0
                },
                new UsuarioResponse
                {
                    Nome = "Anônioi Manso Pacífico de Oliveira Sossegado",
                    Tipo = 1
                }
            };
        }
    }
}
