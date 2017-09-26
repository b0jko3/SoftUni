using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Count_the_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            int counter = 0;

            while (true)
            {
                string input = Console.ReadLine();
                
                if(input == null)
                {
                    Console.WriteLine(counter - 1);
                    return;
                }
                if (input == "" || !input.Any(char.IsDigit))
                {
                    Console.WriteLine(counter);
                    return;
                }
                else
                {
                    counter++;
                }
            }
        }
    }
}
