using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Vowel_or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            char input = char.Parse(Console.ReadLine().ToLower());

            if (input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u')
            {
                Console.WriteLine("vowel");
            }
            else if (Char.IsDigit(input))
            {
                Console.WriteLine("digit");
            }
            else
            {
                Console.WriteLine("other");
            }
        }
    }
}
