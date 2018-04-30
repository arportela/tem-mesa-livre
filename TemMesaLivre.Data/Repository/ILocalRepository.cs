using System;
using System.Collections.Generic;
using System.Text;
using TemMesaLivre.Data.Shared.Repository;
using TemMesaLivre.Domain.Entities;

namespace TemMesaLivre.Data.Repository
{
    public interface ILocalRepository: IRepositoryBase<LocalEntity>
    {
    }
}
