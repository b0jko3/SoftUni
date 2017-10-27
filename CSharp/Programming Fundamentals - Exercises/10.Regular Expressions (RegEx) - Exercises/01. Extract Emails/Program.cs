using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _01.Extract_Emails
{
    class Program
    {
        static void Main()
        {
            string inputText = Console.ReadLine();
            string pattern = @"\s[0-9A-Za-z]+([.-]\w*)*@(\w+[.-])*(\w+[.-]\w+)+";

            MatchCollection emails = Regex.Matches(inputText, pattern);

            foreach (Match email in emails)
            {
                Console.WriteLine(email.Value.Trim());
            }
        }
    }
}
