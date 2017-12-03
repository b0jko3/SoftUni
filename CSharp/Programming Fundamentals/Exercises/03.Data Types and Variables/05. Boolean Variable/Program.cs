using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Boolean_Variable
{
    class Program
    {
        static void Main(string[] args)
        {
            string inputBool = Console.ReadLine();
            bool result = false;

            result = Convert.ToBoolean(inputBool);

            if (result)
            {
                Console.WriteLine("Yes");
            }
            else if(!result)
            {
                Console.WriteLine("No");
            }
        }
    }
}
