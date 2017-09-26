using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Interval_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            int start = 0;
            int end = 0;

            if(firstNumber > secondNumber)
            {
                start = secondNumber;
                end = firstNumber;
            }
            else
            {
                start = firstNumber;
                end = secondNumber;
            }

            for (int i = start; i <= end; i++)
            {
                Console.WriteLine(i);
            }
        }
    }
}
