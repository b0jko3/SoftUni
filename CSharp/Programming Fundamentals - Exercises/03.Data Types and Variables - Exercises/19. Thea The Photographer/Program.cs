using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

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
            decimal seconds = (numberOfPictures * secondsToFilter) + (Math.Ceiling(goodPictures) * secondsToUpload);

            TimeSpan timeSpan = TimeSpan.FromSeconds((long)seconds);

            Console.WriteLine("{0:d\\:hh\\:mm\\:ss}",timeSpan);
        }
    }
}
