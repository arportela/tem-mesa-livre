using System;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Ninject;
using Ninject.Modules;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi;
using Ninject.Web.WebApi.OwinHost;
using Owin;
using TemMesaLivre.Application.Local;
using TemMesaLivre.Application.Usuario;
using TemMesaLivre.Data;
using TemMesaLivre.Data.Repository;
using TemMesaLivre.WebAPI.App_Start;
using TemMesaLivre.WebAPI.Security;

[assembly: OwinStartup(typeof(TemMesaLivre.WebAPI.Startup))]

namespace TemMesaLivre.WebAPI
{
    public class Startup
    {
        public IKernel ConfigureNinject(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            var kernel = CreateKernel();
            app.UseNinjectMiddleware(() => kernel);
            app.UseNinjectWebApi(config);

            return kernel;
        }

        public static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());

            GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);

            return kernel;
        }

        public static void ConfigureAuth(IAppBuilder app, IKernel kernel)
        {
            var OAuthOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(20),
                Provider = new SimpleAuthorizationServerProvider(kernel.Get<IUsuarioRepository>())
            };

            app.UseOAuthBearerTokens(OAuthOptions);
            app.UseOAuthAuthorizationServer(OAuthOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
        }

        public void Configuration(IAppBuilder app)
        {            
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AutoMapperConfig.RegisterMappings();
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.MediaTypeMappings
                .Add(new System.Net.Http.Formatting.RequestHeaderMapping("Accept",
                              "text/html",
                              StringComparison.InvariantCultureIgnoreCase,
                              true,
                              "application/json"));
            var kernel = ConfigureNinject(app);
            ConfigureAuth(app, kernel);
        }
    }

    public class NinjectConfig : NinjectModule
    {
        public override void Load()
        {
            RegisterServices();
        }

        private void RegisterServices()
        {
            Kernel.Bind<IDatabaseContext>().To<DatabaseContext>();
            Kernel.Bind<IUsuarioRepository>().To<UsuarioRepository>();
            Kernel.Bind<IUsuarioService>().To<UsuarioService>();
            Kernel.Bind<ILocalRepository>().To<LocalRepository>();
            Kernel.Bind<ILocalService>().To<LocalService>();
        }
    }
}
