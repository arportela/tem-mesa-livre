using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TemMesaLivre.Application.Usuario;
using TemMesaLivre.Data.Repository;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Application.Local
{
    public class LocalService : ILocalService
    {
        private readonly ILocalRepository _repository;
        public LocalService(ILocalRepository repository)
        {
            _repository = repository;
        }
        public Guid Create(LocalRequest request)
        {
            var entity = Mapper.Map<LocalRequest, LocalEntity>(request);

            _repository.Create(entity);
            _repository.SaveChanges();

            return entity.Id;
        }

        public bool Delete(Guid Id)
        {
            throw new NotImplementedException();
        }

        public List<LocalResponse> GetAll()
        {
            var list = Mapper.Map<List<LocalEntity>, List<LocalResponse>>(_repository.GetAll().ToList());

            return list;
        }

        public Guid Update(LocalRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
