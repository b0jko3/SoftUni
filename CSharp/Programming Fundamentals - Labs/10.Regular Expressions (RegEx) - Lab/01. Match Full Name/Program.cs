using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _01.Match_Full_Name
{
    class Program
    {
        static void Main()
        {
            string text = Console.ReadLine();
            string pattern = @"\b[A-Z][a-z]+ [A-Z][a-z]+\b";

            MatchCollection names = Regex.Matches(text, pattern);

            foreach (Match name in names)
            {
                Console.Write(name.Value + " ");
            }
            Console.WriteLine();
        }
    }
}
