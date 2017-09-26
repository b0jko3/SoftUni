using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Triangle_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());

            if (number > 0)
            {
                Console.WriteLine(1);
                for (int i = 2; i <= number; i++)
                {
                    Console.Write(i + " ");

                    for (int j = 0; j < i - 1; j++)
                    {
                        Console.Write(i + " ");
                    }
                    Console.WriteLine();
                }
            }

        }
    }
}
