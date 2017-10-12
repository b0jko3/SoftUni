using System;

namespace _08.Center_Point
{
    class Program
    {
        public static double DistanceFromCenter(double x, double y)
        {
            double result = 0;

            result = Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2));

            return result;
        }

        static void Main()
        {
            double xOne = double.Parse(Console.ReadLine());
            double yOne = double.Parse(Console.ReadLine());
            double xTwo = double.Parse(Console.ReadLine());
            double yTwo = double.Parse(Console.ReadLine());

            if (DistanceFromCenter(xOne, yOne) < DistanceFromCenter(xTwo, yTwo))
            {
                Console.WriteLine($"({xOne}, {yOne})");
            }
            else
            {
                Console.WriteLine($"({xTwo}, {yTwo})");
            }
        }
    }
}
