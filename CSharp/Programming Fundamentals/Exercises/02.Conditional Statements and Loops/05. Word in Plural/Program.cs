using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Word_in_Plural
{
    class Program
    {
        static void Main(string[] args)
        {
            string noun = Console.ReadLine();
            string pluralized = "";

            if (noun.EndsWith("y"))
            {
                for (int i = 0; i < noun.Length - 1; i++)
                {
                    pluralized += noun[i];
                }
                Console.WriteLine($"{pluralized}ies");
            }
            else if (noun.EndsWith("o") || noun.EndsWith("ch")
                  || noun.EndsWith("s") || noun.EndsWith("sh")
                  || noun.EndsWith("x") || noun.EndsWith("z"))
            {
                Console.WriteLine($"{noun}es");
            }
            else
            {
                Console.WriteLine($"{noun}s");
            }
        }
    }
}
