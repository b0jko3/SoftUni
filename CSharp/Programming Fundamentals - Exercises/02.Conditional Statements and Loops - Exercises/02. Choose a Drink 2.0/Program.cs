using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Choose_a_Drink_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            string profession = Console.ReadLine();
            int quantity = int.Parse(Console.ReadLine());
            decimal priceOfWater = 0.7M;
            decimal priceOfCoffe = 1;
            decimal priceOfBeer = 1.7M;
            decimal priceOfTea = 1.2M;
            decimal sum;

            if (profession == "Athlete")
            {
                sum = priceOfWater * quantity;
            }
            else if (profession == "Businessman" || profession == "Businesswoman")
            {
                sum = priceOfCoffe * quantity;
            }
            else if (profession == "SoftUni Student")
            {
                sum = priceOfBeer * quantity;
            }
            else
            {
                sum = priceOfTea * quantity;
            }

            Console.WriteLine($"The {profession} has to pay {sum:F2}.");
        }
    }
}