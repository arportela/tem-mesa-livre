using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
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
        public IHttpActionResult GetClaims()
        {
            var identity = User.Identity as ClaimsIdentity;

            var claims = from c in identity.Claims
                         select new
                         {
                             subject = c.Subject.Name,
                             type = c.Type,
                             value = c.Value
                         };

            return Ok(claims);
        }

        [HttpGet]        
        public List<UsuarioResponse> GetAll()
        {
            return _usuarioService.GetAll();
        }

        [HttpPost]
        public Guid Create([FromBody] UsuarioRequest request)
        {
            return _usuarioService.Create(request);
        }

        [HttpPost]
        public bool CheckEmail([FromBody] UsuarioRequest request)
        {
            return _usuarioService.CheckEmail(request);
        }

        [HttpPost]
        public IHttpActionResult CheckUsuarioUnico([FromBody] UsuarioRequest request)
        {
            var entities = _usuarioService.GetAll();

            if (entities.Any(_ => _.NomeUsuario == request.NomeUsuario))
            {
                return BadRequest("Este nome de usuário já existe.");
            }
            if (entities.Any(_ => _.Email == request.Email))
            {
                return BadRequest("Este e-mail já existe.");
            }
            
            return Ok("");
        }

        [HttpPost]
        public Guid UpdateSenha([FromBody] UsuarioRequest request)
        {
            return _usuarioService.UpdateSenha(request);
        }
    }
}
