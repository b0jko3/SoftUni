using System;

namespace _01.Hello__Name_
{
    class Program
    {
        public static string PrintName(string name)
        {
            string result = $"Hello, {name}!";

            return result;
        }
        static void Main()
        {
            string name = Console.ReadLine();
            
            Console.WriteLine(PrintName(name));
        }
    }
}
