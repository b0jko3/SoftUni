using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Miles_to_Kilometers
{
    class Program
    {
        static void Main(string[] args)
        {
            double miles = double.Parse(Console.ReadLine());
            double oneMile = 1.60934;
            double sum = miles * oneMile;

            Console.WriteLine("{0:F2}", sum);
        }
    }
}
