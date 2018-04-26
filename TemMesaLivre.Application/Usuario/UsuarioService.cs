using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TemMesaLivre.Data.Repository;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Application.Usuario
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _repository;
        public UsuarioService(IUsuarioRepository repository)
        {
            _repository = repository;
        }
        public List<UsuarioResponse> GetUsuarios()
        {
            var list = Mapper.Map<List<UsuarioEntity>, List<UsuarioResponse>>(_repository.GetAll().ToList());

            return list;
        }

        public Guid Create(UsuarioRequest request)
        {
            var entity = Mapper.Map<UsuarioRequest, UsuarioEntity>(request);

            var id = _repository.Create(entity);
            _repository.SaveChanges();

            return id;
        }
    }
}
