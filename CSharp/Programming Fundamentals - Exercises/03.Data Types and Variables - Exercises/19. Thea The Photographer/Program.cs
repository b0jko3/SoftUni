using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _19.Thea_The_Photographer
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal numberOfPictures = decimal.Parse(Console.ReadLine());
            decimal secondsToFilter = decimal.Parse(Console.ReadLine());
            decimal percentageGoodPictures = decimal.Parse(Console.ReadLine());
            decimal secondsToUpload = decimal.Parse(Console.ReadLine());
            decimal goodPictures = numberOfPictures - (numberOfPictures - numberOfPictures * percentageGoodPictures / 100);
            Console.WriteLine(goodPictures);
            decimal seconds = (numberOfPictures * secondsToFilter) + (Math.Ceiling(goodPictures) * secondsToUpload);
            Console.WriteLine(seconds);
            decimal minutes = 0;
            decimal hours = 0;
            decimal days = 0;

            while(seconds > 59)
            {
                seconds -= 60;
                minutes++;
            }
            while (minutes > 59)
            {
                minutes -= 60;
                hours++;
            }
            while (hours > 23)
            {
                hours -= 24;
                days++;
            }
            Console.WriteLine($"{(int)days}:{(int)hours:d2}:{(int)minutes:d2}:{(int)seconds:d2}");
        }
    }
}
