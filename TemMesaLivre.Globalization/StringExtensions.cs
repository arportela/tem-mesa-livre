using System;
using System.Collections.Generic;
using System.Text;

namespace TemMesaLivre.Globalization
{
    public static class StringExtensions
    {
        public static string Fill(this string format, params object[] args)
        {
            return string.Format(format, args);
        }
    }
}
