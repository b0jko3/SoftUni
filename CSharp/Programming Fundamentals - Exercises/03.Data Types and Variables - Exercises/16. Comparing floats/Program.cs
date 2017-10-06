using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16.Comparing_floats
{
    class Program
    {
        static void Main(string[] args)
        {
            double eps = 0.000001;
            double diff = 0.0;
            double firstNumber = double.Parse(Console.ReadLine());
            double secondNumber = double.Parse(Console.ReadLine());

            diff = firstNumber - secondNumber;

            if (Math.Abs(diff) < eps)
            {
                Console.WriteLine("True");
            }
            else
            {
                Console.WriteLine("False");
            }

            //75/100
            //double firstNumber = double.Parse(Console.ReadLine());
            //double secondNumber = double.Parse(Console.ReadLine());
            //
            //firstNumber = Math.Abs(firstNumber);
            //secondNumber = Math.Abs(secondNumber);
            //
            //string test1 = String.Format("{0:f6}", firstNumber);
            //string test2 = String.Format("{0:f6}", secondNumber);
            //
            //if (String.Equals(test1, test2))
            //{
            //    Console.WriteLine("True");
            //}
            //else
            //{
            //    Console.WriteLine("False");
            //}
        }
    }
}
