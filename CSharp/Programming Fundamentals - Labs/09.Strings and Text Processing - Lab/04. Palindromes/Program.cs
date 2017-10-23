using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Palindromes
{
    class Program
    {
        static void Main()
        {
            string[] text = Console.ReadLine()
                .Split(new char[] { ' ', ',', '!', '?', '.' }, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();
            char[] charArray;
            string[] reversedText = new string[text.Length];
            string[] result = new string[text.Length];

            for (int i = 0; i < text.Length; i++)
            {
                charArray = text[i].ToCharArray();
                Array.Reverse(charArray);
                reversedText[i] = new string(charArray);

                if (reversedText[i] == text[i])
                {
                    result[i] = text[i];
                }
            }
            Array.Sort(result, StringComparer.InvariantCulture);
            result = result.Where(x => !string.IsNullOrEmpty(x)).ToArray();
            Console.WriteLine(String.Join(", ", result));
        }
    }
}
