using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Hello__Name_
{
    class Program
    {
        public static string PrintName(string name)
        {
            string result = $"Hello, {name}!";

            return result;
        }
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            
            Console.WriteLine(PrintName(name));
        }
    }
}
