using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Cake_Ingredients
{
    class Program
    {
        static void Main(string[] args)
        {
            string command = "";
            int counter = 0;

            while(command != "Bake!")
            {
                command = Console.ReadLine();
                if(command != "Bake!")
                {
                    Console.WriteLine($"Adding ingredient {command}.");
                    counter++;
                }
            }
            Console.WriteLine($"Preparing cake with {counter} ingredients.");
        }
    }
}
