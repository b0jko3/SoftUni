using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Test_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberN = int.Parse(Console.ReadLine());
            int numberM = int.Parse(Console.ReadLine());
            int numberSum = int.Parse(Console.ReadLine());
            int sum = 0;
            int combinations = 0;

            for (int i = numberN; i > 0; i--)
            {
                for (int j = 1; j <= numberM; j++)
                {
                    sum += 3 * (i * j);
                    combinations++;
                    if(sum >= numberSum)
                    {
                        Console.WriteLine($"{combinations} combinations");
                        Console.WriteLine($"Sum: {sum} >= {numberSum}");
                        return;
                    }
                }
            }
            Console.WriteLine($"{combinations} combinations");
            Console.WriteLine($"Sum: {sum}");
        }
    }
}
