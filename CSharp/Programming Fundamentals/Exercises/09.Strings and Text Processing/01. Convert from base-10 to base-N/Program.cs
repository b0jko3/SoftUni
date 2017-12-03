using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Convert_from_base_10_to_base_N
{
    class Program
    {
        static void Main()
        {
            string input = Console.ReadLine();

            Console.WriteLine(DecimalToArbitrarySystem(
                Convert.ToInt32(input.Substring(0, input.IndexOf(" "))),
                Convert.ToInt64(input.Substring(input.IndexOf(" ")))));
        }

        public static string DecimalToArbitrarySystem(int radix, long decimalNumber)
        {
            const int BitsInLong = 64;
            const string Digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
            if (decimalNumber == 0)
                return "0";

            int index = BitsInLong - 1;
            long currentNumber = Math.Abs(decimalNumber);
            char[] charArray = new char[BitsInLong];

            while (currentNumber != 0)
            {
                int remainder = (int)(currentNumber % radix);
                charArray[index--] = Digits[remainder];
                currentNumber = currentNumber / radix;
            }

            string result = new String(charArray, index + 1, BitsInLong - index - 1);
            if (decimalNumber < 0)
            {
                result = "-" + result;
            }

            return result;
        }
    }
}
