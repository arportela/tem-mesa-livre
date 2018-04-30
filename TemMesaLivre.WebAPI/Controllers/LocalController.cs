using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TemMesaLivre.Application.Local;

namespace TemMesaLivre.WebAPI.Controllers
{
    public class LocalController : ApiController
    {
        private readonly ILocalService _localService;
        public LocalController(ILocalService localService)
        {
            _localService = localService;
        }
        [HttpPost]
        [Authorize]
        public Guid Create([FromBody] LocalRequest request)
        {
            return _localService.Create(request);
        }

        [HttpGet]
        [Authorize]
        public List<LocalResponse> GetAll()
        {
            return _localService.GetAll();
        }
    }
}
