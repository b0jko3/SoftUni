using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Magic_Letter
{
    class Program
    {
        static void Main(string[] args)
        {
            char firstLetter = char.Parse(Console.ReadLine());
            char secondLetter = char.Parse(Console.ReadLine());
            char skipLetter = char.Parse(Console.ReadLine());
            string result = "";

            for (int i = firstLetter; i <= secondLetter; i++)
            {
                if (i != skipLetter)
                {
                    for (int j = firstLetter; j <= secondLetter; j++)
                    {
                        if (j != skipLetter)
                        {
                            for (int k = firstLetter; k <= secondLetter; k++)
                            {
                                if (k != skipLetter)
                                {
                                    result = $"{(char)i}{(char)j}{(char)k} ";
                                    Console.Write(result);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
