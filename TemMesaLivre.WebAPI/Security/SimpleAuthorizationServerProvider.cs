using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Cors;
using TemMesaLivre.Data.Repository;

namespace TemMesaLivre.WebAPI.Security
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SimpleAuthorizationServerProvider: OAuthAuthorizationServerProvider
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public SimpleAuthorizationServerProvider(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] {"*"});

            var usuario = _usuarioRepository.GetByLoginAndPassword(context.UserName, context.Password);

            if (usuario != null)
            {
                identity.AddClaim(new Claim("Nome", usuario.Nome));

                var properties = new AuthenticationProperties(new Dictionary<string, string> {
                    {
                        "userdisplayname", context.UserName
                    },
                    {
                        "role", "admin"
                    }
                });

                var ticket = new AuthenticationTicket(identity, properties);
                context.Validated(ticket);
            }
            else
            {
                context.SetError("invalid_grant", "O usuário e/ou senha fornecidos são inválidos");
            }

            return;
        }
    }
}