using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TemMesaLivre.Data.Repository;
using TemMesaLivre.Domain.Entities;
using TemMesaLivre.Domain.Extensions;

namespace TemMesaLivre.Application.Usuario
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _repository;
        public UsuarioService(IUsuarioRepository repository)
        {
            _repository = repository;
        }
        public List<UsuarioResponse> GetAll()
        {
            var list = Mapper.Map<List<UsuarioEntity>, List<UsuarioResponse>>(_repository.GetAll().ToList());

            return list;
        }

        public Guid Create(UsuarioRequest request)
        {
            var entity = Mapper.Map<UsuarioRequest, UsuarioEntity>(request);

            _repository.Create(entity);
            _repository.SaveChanges();

            return entity.Id;
        }

        public bool CheckEmail(UsuarioRequest request)
        {
            return _repository.GetByEmailAndRole(request.Email, request.Tipo) != null;
        }

        public Guid UpdateSenha(UsuarioRequest request)
        {
            var entity = _repository.GetByEmail(request.Email);
            entity.Senha = request.Senha;
            _repository.Update(entity);
            _repository.SaveChanges();
            return entity.Id;
        }
    }
}
