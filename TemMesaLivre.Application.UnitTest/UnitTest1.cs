using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TemMesaLivre.Application.UnitTest.Mock;
using TemMesaLivre.Application.Usuario;
using TemMesaLivre.WebAPI.Controllers;

namespace TemMesaLivre.Application.UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void GetUsuarios_DeveRetornarTodosUsuarios()
        {
            var controller = new UsuarioController(new UsuarioServiceMock());

            var result = controller.GetAll();
            Assert.AreEqual(result.Count, 2);
        }
    }
}
