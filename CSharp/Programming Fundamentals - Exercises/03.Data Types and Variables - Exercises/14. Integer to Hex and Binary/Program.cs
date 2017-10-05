using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Integer_to_Hex_and_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            int decNumber = int.Parse(Console.ReadLine());
            string hexNumber = "";
            string binaryNumber = "";

            hexNumber = Convert.ToString(decNumber, 16);
            binaryNumber = Convert.ToString(decNumber, 2);

            Console.WriteLine(hexNumber.ToUpper());
            Console.WriteLine(binaryNumber);
        }
    }
}
