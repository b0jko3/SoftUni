using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Text_Filter
{
    class Program
    {
        static void Main()
        {
            string[] skip = Console.ReadLine()
                .Split(',', ' ')
                .Where(w=>w.Length > 0)
                .ToArray();
            string text = Console.ReadLine();

            for (int i = 0; i < skip.Length; i++)
            {
                for (int j = skip[i].Length; j <= text.Length; j++)
                {
                    string temp = "";
                    temp = text.Substring(j - skip[i].Length, skip[i].Length);

                    if (temp == skip[i])
                    {
                        text = text
                            .Remove(j - skip[i].Length, skip[i].Length)
                            .Insert(j - skip[i].Length, new String('*', skip[i].Length));
                    }
                }
            }
            Console.WriteLine(text);
        }
    }
}
