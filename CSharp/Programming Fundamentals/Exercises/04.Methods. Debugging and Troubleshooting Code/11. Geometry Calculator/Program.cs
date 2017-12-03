using System;

namespace _11.Geometry_Calculator
{
    class Program
    {
        public static double AreaOfTriangle(double side, double height)
        {
            double result = 0;

            result = 0.5 * side * height;

            return result;
        }
        public static double AreaOfSquare(double side)
        {
            double result = 0;

            result = Math.Pow(side, 2);
            
            return result;
        }
        public static double AreaOfRectangle(double width, double height)
        {
            double result = 0;

            result = width * height;

            return result;
        }
        public static double AreaOfCircle(double radius)
        {
            double result = 0;

            result = Math.PI * Math.Pow(radius, 2);

            return result;
        }

        static void Main()
        {
            string figureType = Console.ReadLine();
            double side = 0;
            double height = 0;
            double width = 0;
            double radius = 0;
            
            if (figureType == "triangle")
            {
                side = double.Parse(Console.ReadLine());
                height = double.Parse(Console.ReadLine());

                Console.WriteLine("{0:F2}", AreaOfTriangle(side, height));
            }
            else if (figureType == "square")
            {
                side = double.Parse(Console.ReadLine());

                Console.WriteLine("{0:F2}", AreaOfSquare(side));
            }
            else if (figureType == "rectangle")
            {
                width = double.Parse(Console.ReadLine());
                height = double.Parse(Console.ReadLine());

                Console.WriteLine("{0:F2}", AreaOfRectangle(width, height));
            }
            else if (figureType == "circle")
            {
                radius = double.Parse(Console.ReadLine());

                Console.WriteLine("{0:F2}", AreaOfCircle(radius));
            }
        }
    }
}
