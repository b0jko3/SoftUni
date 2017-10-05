using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Convert_Speed_Units
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal meters = decimal.Parse(Console.ReadLine());
            decimal hours = decimal.Parse(Console.ReadLine());
            decimal minutes = decimal.Parse(Console.ReadLine());
            decimal seconds = decimal.Parse(Console.ReadLine());
            decimal totalSeconds = hours * 3600 + minutes * 60 + seconds;
            decimal totalHours = totalSeconds / 3600;
            decimal miles = meters / 1609;
            decimal kilometers = meters / 1000;

            decimal metersPerSecond = meters / totalSeconds;
            decimal kilometersPerHour = kilometers / totalHours;
            decimal milesPerHour = miles / totalHours;

            Console.WriteLine("{0:g7}", metersPerSecond);
            Console.WriteLine("{0:g7}", kilometersPerHour);
            Console.WriteLine("{0:g7}", milesPerHour);
        }
    }
}
