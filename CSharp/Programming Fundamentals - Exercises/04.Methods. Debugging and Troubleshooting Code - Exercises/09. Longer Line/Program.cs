using System;

namespace _09.Longer_Line
{
    class Program
    {
        public static double DistanceFromCenter(double x, double y)
        {
            double result = 0;

            result = Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2));

            return result;
        }
        public static double DistanceBetweenTwoPoint(double xOne, double yOne, double xTwo, double yTwo)
        {
            double result = 0;

            result = Math.Sqrt(Math.Pow(xOne - xTwo, 2) + Math.Pow(yOne - yTwo, 2));

            return result;
        }

        static void Main()
        {
            double xOne = double.Parse(Console.ReadLine());
            double yOne = double.Parse(Console.ReadLine());
            double xTwo = double.Parse(Console.ReadLine());
            double yTwo = double.Parse(Console.ReadLine());
            double xThree = double.Parse(Console.ReadLine());
            double yThree = double.Parse(Console.ReadLine());
            double xFour = double.Parse(Console.ReadLine());
            double yFour = double.Parse(Console.ReadLine());

            if (DistanceBetweenTwoPoint(xOne, yOne, xTwo, yTwo) >= DistanceBetweenTwoPoint(xThree, yThree, xFour, yFour))
            {
                if (DistanceFromCenter(xOne, yOne) <= DistanceFromCenter(xTwo, yTwo))
                {
                    Console.WriteLine($"({xOne}, {yOne})({xTwo}, {yTwo})");
                }
                else
                {
                    Console.WriteLine($"({xTwo}, {yTwo})({xOne}, {yOne})");
                }
            }
            else
            {
                if (DistanceFromCenter(xThree, yThree) <= DistanceFromCenter(xFour, yFour))
                {
                    Console.WriteLine($"({xThree}, {yThree})({xFour}, {yFour})");
                }
                else
                {
                    Console.WriteLine($"({xFour}, {yFour})({xThree}, {yThree})");
                }
            }
        }
    }
}
