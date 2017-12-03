using System;

namespace _06.Prime_Checker
{
    class Program
    {
        public static bool IsPrime(long number)
        {
            bool result = false;

            if (number == 0 || number == 1)
            {
                return result;
            }
            else
            {
                for (int i = 2; i <= Math.Floor(Math.Sqrt(number)); i++)
                {
                    if (number % i == 0)
                    {
                        return result;
                    }
                }
                result = true;
                return result;
            }
        }

        static void Main()
        {
            long checkIfPrime = long.Parse(Console.ReadLine());

            Console.WriteLine(IsPrime(checkIfPrime));
        }
    }
}
