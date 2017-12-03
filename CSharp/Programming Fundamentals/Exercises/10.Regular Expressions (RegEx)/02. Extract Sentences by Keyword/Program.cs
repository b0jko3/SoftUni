using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Extract_Sentences_by_Keyword
{
    class Program
    {
        static void Main()
        {
            string word = Console.ReadLine();
            string[] text = Console.ReadLine().Split(new char[] { '.', '?', '!' }, StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < text.Length; i++)
            {
                if (text[i].Contains(" " + word + " "))
                {
                    Console.WriteLine(text[i].Trim());
                }
            }
        }
    }
}
