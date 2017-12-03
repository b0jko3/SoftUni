using System;

namespace _10.Cube_Properties
{
    class Program
    {
        public static double CubesFaceSpaceVolumeOrArea(double side, string command)
        {
            double result = 0;

            if (command == "face")
            {
                result = Math.Sqrt(2 * Math.Pow(side, 2));
            }
            else if (command == "space")
            {
                result = Math.Sqrt(3 * Math.Pow(side, 2));
            }
            else if (command == "volume")
            {
                result = Math.Pow(side, 3);
            }
            else if (command == "area")
            {
                result = 6 * Math.Pow(side, 2);
            }

            return result;
        }

        static void Main()
        {
            double side = double.Parse(Console.ReadLine());
            string command = Console.ReadLine();

            Console.WriteLine("{0:F2}", CubesFaceSpaceVolumeOrArea(side, command));
        }
    }
}
