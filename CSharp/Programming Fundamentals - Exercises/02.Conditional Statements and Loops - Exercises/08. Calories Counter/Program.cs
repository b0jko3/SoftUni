using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Calories_Counter
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfIngredients = int.Parse(Console.ReadLine());
            string ingredients = "";
            int totalCalories = 0;

            for (int i = 0; i < numberOfIngredients; i++)
            {
                ingredients = Console.ReadLine().ToLower();

                if (ingredients == "cheese")
                {
                    totalCalories += 500;
                }
                else if (ingredients == "tomato sauce")
                {
                    totalCalories += 150;
                }
                else if (ingredients == "salami")
                {
                    totalCalories += 600;
                }
                else if (ingredients == "pepper")
                {
                    totalCalories += 50;
                }
            }
            Console.WriteLine($"Total calories: {totalCalories}");
        }
    }
}
