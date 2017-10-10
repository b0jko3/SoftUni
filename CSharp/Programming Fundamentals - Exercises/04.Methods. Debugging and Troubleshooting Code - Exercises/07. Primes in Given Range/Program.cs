using System;

namespace _07.Primes_in_Given_Range
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

        public static string PrimesByRange(int start, int end)
        {
            string result = "";
            int count = 1;

            for (int i = start; i <= end; i++)
            {
                if (count == 1 && IsPrime(i))
                {
                    result += i;
                    count++;
                }else if (IsPrime(i))
                {
                    result += ", " + i;
                }
            }
            return result;
        }
        static void Main()
        {
            int startNumber = int.Parse(Console.ReadLine());
            int endNumber = int.Parse(Console.ReadLine());

            Console.WriteLine(PrimesByRange(startNumber,endNumber));
        }
    }
}
