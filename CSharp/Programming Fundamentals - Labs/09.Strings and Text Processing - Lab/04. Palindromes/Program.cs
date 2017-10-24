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
            string[] palindromes = new string[text.Length];

            for (int i = 0; i < text.Length; i++)
            {
                charArray = text[i].ToCharArray();
                Array.Reverse(charArray);
                reversedText[i] = new string(charArray);

                if (reversedText[i] == text[i] && text[i] != "")
                {
                    palindromes[i] = text[i];
                }
            }
            HashSet<string> set = new HashSet<string>(palindromes);
            palindromes = new string[set.Count];
            set.CopyTo(palindromes);

            Array.Sort(palindromes, StringComparer.InvariantCulture);
            palindromes = palindromes.Where(x => !string.IsNullOrEmpty(x)).ToArray();
            Console.WriteLine(String.Join(", ", palindromes));
        }
    }
}
