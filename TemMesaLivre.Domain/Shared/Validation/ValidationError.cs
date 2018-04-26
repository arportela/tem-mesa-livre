using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Domain.Shared.Validation
{
    public class ValidationError
    {
        public int ErrorCode { get; set; }
        public string Message { get; set; }
        public ValidationError(string message, int errorCode = 0)
        {
            ErrorCode = errorCode;
            Message = message;
        }
    }
}
