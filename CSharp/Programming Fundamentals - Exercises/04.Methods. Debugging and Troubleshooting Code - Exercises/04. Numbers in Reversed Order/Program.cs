using System;

namespace _04.Numbers_in_Reversed_Order
{
    class Program
    {
        public static string Reverse(string reverse)
        {
            string result = "";

            for (int i = reverse.Length - 1; i >= 0; i--)
            {
                result += reverse[i];
            }
            return result;
        }

        static void Main()
        {
            string reverseThis = Console.ReadLine();

            Console.WriteLine(Reverse(reverseThis));
        }
    }
}
