using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TemMesaLivre.Application.Usuario;

namespace TemMesaLivre.WebAPI.Controllers
{
    public class UsuarioController : ApiController
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        [Authorize]
        public List<UsuarioResponse> GetUsuarios()
        {
            return _usuarioService.GetUsuarios();
        }

        [HttpPost]
        [Authorize]
        public Guid Create([FromBody] UsuarioRequest request)
        {
            return _usuarioService.Create(request);
        }
    }
}
