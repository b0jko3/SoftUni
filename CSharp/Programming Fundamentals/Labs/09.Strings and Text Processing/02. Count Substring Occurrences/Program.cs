using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Count_Substring_Occurrences
{
    class Program
    {
        static void Main()
        {
            string text = Console.ReadLine().ToLower();
            string word = Console.ReadLine().ToLower();
            int count = 0;

            for (int i = word.Length; i <= text.Length; i++)
            {
                string temp = "";
                temp = text.Substring(i - word.Length, word.Length);

                if (temp == word)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }
    }
}
