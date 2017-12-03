using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Hotel
{
    class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine();
            int nightsCount = int.Parse(Console.ReadLine());
            decimal studioRoom = 0;
            decimal doubleRoom = 0;
            decimal suiteRoom = 0;

            if (month == "May" || month == "October")
            {
                if (nightsCount > 7)
                {
                    studioRoom = 50 * nightsCount;
                    if (month == "October")
                    {
                        studioRoom -= 50;
                    }
                    studioRoom -= studioRoom * 0.05M;
                }
                else
                {
                    studioRoom = 50 * nightsCount;
                }
                doubleRoom = 65 * nightsCount;
                suiteRoom = 75 * nightsCount;
            } else if (month == "June" || month == "September")
            {
                if (nightsCount > 7 && month == "September")
                {
                    studioRoom = 60 * nightsCount;
                    studioRoom -= 60;
                }
                else
                {
                    studioRoom = 60 * nightsCount;
                }
                if (nightsCount > 14)
                {
                    doubleRoom = 72 * nightsCount;
                    doubleRoom -= doubleRoom * 0.1M;
                }
                else
                {
                    doubleRoom = 72 * nightsCount;
                }
                suiteRoom = 82 * nightsCount;
            }
            else if (month == "July" || month == "August" || month == "December")
            {
                studioRoom = 68 * nightsCount;
                doubleRoom = 77 * nightsCount;
                if(nightsCount > 14)
                {
                    suiteRoom = 89 * nightsCount;
                    suiteRoom -= suiteRoom * 0.15M;
                }
                else
                {
                    suiteRoom = 89 * nightsCount;
                }
            }
            Console.WriteLine($"Studio: {studioRoom:F2} lv.");
            Console.WriteLine($"Double: {doubleRoom:F2} lv.");
            Console.WriteLine($"Suite: {suiteRoom:F2} lv.");
        }
    }
}
