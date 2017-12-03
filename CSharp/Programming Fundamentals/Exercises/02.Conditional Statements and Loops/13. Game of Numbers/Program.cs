using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Game_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberN = int.Parse(Console.ReadLine());
            int numberM = int.Parse(Console.ReadLine());
            int magicNumber = int.Parse(Console.ReadLine());
            int combinations = 0;

            for (int i = numberN; i <= numberM; i++)
            {
                for (int j = numberN; j <= numberM; j++)
                {
                    combinations++;
                    if (i + j == magicNumber)
                    {
                        Console.WriteLine($"Number found! {j} + {i} = {magicNumber}");
                        return;
                    }
                }
            }
            Console.WriteLine($"{combinations} combinations - neither equals {magicNumber}");
        }
    }
}
