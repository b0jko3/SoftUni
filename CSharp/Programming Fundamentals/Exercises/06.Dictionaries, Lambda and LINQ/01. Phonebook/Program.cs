using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Phonebook
{
    class Program
    {
        static void Main()
        {
            Dictionary<string, string> phoneBook = new Dictionary<string, string>();
            string end = "END";
            string inputString = "";

            while (inputString != end)
            {
                inputString = Console.ReadLine();

                if (inputString[0] == 'A')
                {
                    inputString = inputString.Remove(0, 2);
                    phoneBook[inputString.Substring(0, inputString.IndexOf(' '))] = inputString.Substring(inputString.IndexOf(' '));
                }
                else if (inputString[0] == 'S')
                {
                    inputString = inputString.Remove(0, 2);
                    if (phoneBook.ContainsKey(inputString.Substring(0)))
                    {
                        Console.WriteLine($"{inputString.Substring(0)} ->{phoneBook[inputString.Substring(0)]}");
                    }
                    else
                    {
                        Console.WriteLine($"Contact {inputString.Substring(0)} does not exist.");
                    }
                }
                else if (inputString == end)
                {
                    return;
                }
            }
        }
    }
}
