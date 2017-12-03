using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Beverage_Labels
{
    class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            double volume = double.Parse(Console.ReadLine());
            double energy = double.Parse(Console.ReadLine());
            double sugar = double.Parse(Console.ReadLine());

            volume /= 100;
            energy *= volume;
            sugar *= volume;
            volume *= 100;

            Console.WriteLine(volume + "ml " + product + ":\n" + energy + "kcal, " + sugar + "g sugars");
        }
    }
}
