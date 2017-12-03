using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Variable_in_Hex_Format
{
    class Program
    {
        static void Main(string[] args)
        {
            string inputHex = Console.ReadLine();
            int result = 0;
            result = Convert.ToInt32(inputHex, 16);

            Console.WriteLine(result);
        }
    }
}
