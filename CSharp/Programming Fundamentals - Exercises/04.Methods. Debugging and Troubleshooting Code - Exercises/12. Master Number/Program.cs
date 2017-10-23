using System;
using System.Collections.Generic;

namespace _12.Master_Number
{
    class Program
    {
        public static bool IsPalindrome(int num)
        {
            string numAsString = num.ToString();
            int i = 0;
            int j = numAsString.Length - 1;
            int k = 0;

            while (i < (numAsString.Length / 2) && j > (numAsString.Length / 2))
            {
                if (numAsString[i + k] == numAsString[j + k])
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        public static bool SumOfDigits(int num)
        {
            string numAsString = num.ToString();
            int temp = 0;

            for (int i = 0; i < numAsString.Length; i++)
            {
                temp = temp + numAsString[i] - 48;
            }
            if (temp % 7 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static bool ContainsEvenDigit(int num)
        {
            string numAsString = num.ToString();
            if (numAsString.Contains("0") ||
                numAsString.Contains("2") ||
                numAsString.Contains("4") ||
                numAsString.Contains("6") ||
                numAsString.Contains("8"))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static void Master(int num)
        {
            for (int i = 0; i < num; i++)
            {
                if (ContainsEvenDigit(i) && SumOfDigits(i) && IsPalindrome(i))
                {
                    Console.WriteLine(i);
                }
            }
        }

        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            Master(n);
        }
    }
}