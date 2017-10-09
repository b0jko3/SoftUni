using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Max_Method
{
    class Program
    {
        public static int GetMax(int firstNumber, int secondNumber)
        {
            int result = 0;

            if (firstNumber >= secondNumber)
            {
                result = firstNumber;
            }
            else
            {
                result = secondNumber;
            }

            return result;
        }

        static void Main(string[] args)
        {
            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            int thirdNumber = int.Parse(Console.ReadLine());

            Console.WriteLine(GetMax(GetMax(firstNumber, secondNumber), thirdNumber));
        }
    }
}
