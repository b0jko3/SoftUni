using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Restaurant_Discount
{
    class Program
    {
        static void Main(string[] args)
        {
            int groupSize = int.Parse(Console.ReadLine());
            string package = Console.ReadLine();
            decimal smallHallPrice = 2500;
            decimal terracePrice = 5000;
            decimal greatHallPrice = 7500;
            decimal normalPrice = 500;
            decimal normalDiscount = 0.05M;
            decimal goldPrice = 750;
            decimal goldDiscount = 0.1M;
            decimal platinumPrice = 1000;
            decimal platinumDiscount = 0.15M;
            decimal sum;
            string offer = "We can offer you the ";
            string pricePerPerson = "The price per person is ";

            if (groupSize > 0 && groupSize <= 50)
            {
                if (package == "Normal")
                {
                    sum = ((smallHallPrice + normalPrice) - ((smallHallPrice + normalPrice) * normalDiscount)) / groupSize;
                    Console.WriteLine(offer + "Small Hall");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
                else if (package == "Gold")
                {
                    sum = ((smallHallPrice + goldPrice) - ((smallHallPrice + goldPrice) * goldDiscount)) / groupSize;
                    Console.WriteLine(offer + "Small Hall");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
                else if (package == "Platinum")
                {
                    sum = ((smallHallPrice + platinumPrice) - ((smallHallPrice + platinumPrice) * platinumDiscount)) / groupSize;
                    Console.WriteLine(offer + "Small Hall");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
            }
            else if (groupSize > 50 && groupSize <= 100)
            {
                if (package == "Normal")
                {
                    sum = ((terracePrice + normalPrice) - ((terracePrice + normalPrice) * normalDiscount)) / groupSize;
                    Console.WriteLine(offer + "Terrace");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
                else if (package == "Gold")
                {
                    sum = ((terracePrice + goldPrice) - ((terracePrice + goldPrice) * goldDiscount)) / groupSize;
                    Console.WriteLine(offer + "Terrace");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
                else if (package == "Platinum")
                {
                    sum = ((terracePrice + platinumPrice) - ((terracePrice + platinumPrice) * platinumDiscount)) / groupSize;
                    Console.WriteLine(offer + "Terrace");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
            }
            else if (groupSize > 100 && groupSize <= 120)
            {
                if (package == "Normal")
                {
                    sum = ((greatHallPrice + normalPrice) - ((greatHallPrice + normalPrice) * normalDiscount)) / groupSize;
                    Console.WriteLine(offer + "Great Hall");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
                else if (package == "Gold")
                {
                    sum = ((greatHallPrice + goldPrice) - ((greatHallPrice + goldPrice) * goldDiscount)) / groupSize;
                    Console.WriteLine(offer + "Great Hall");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
                else if (package == "Platinum")
                {
                    sum = ((greatHallPrice + platinumPrice) - ((greatHallPrice + platinumPrice) * platinumDiscount)) / groupSize;
                    Console.WriteLine(offer + "Great Hall");
                    Console.WriteLine(pricePerPerson + $"{sum:F2}$");
                }
            }
            else
            {
                Console.WriteLine("We do not have an appropriate hall.");
            }
        }
    }
}
