using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Application.Local
{
    public interface ILocalService
    {
        List<LocalResponse> GetAll();
        Guid Create(LocalRequest request);
        Guid Update(LocalRequest request);
        bool Delete(Guid Id);
    }
}
