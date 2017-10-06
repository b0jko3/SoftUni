using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _18.Different_Integers_Size
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger number = BigInteger.Parse(Console.ReadLine());
            bool fitsInSByte = number >= sbyte.MinValue && number <= sbyte.MaxValue;
            bool fitsInByte = number >= byte.MinValue && number <= byte.MaxValue;
            bool fitsInShort = number >= short.MinValue && number <= short.MaxValue;
            bool fitsInUShort = number >= ushort.MinValue && number <= ushort.MaxValue;
            bool fitsInInt = number >= int.MinValue && number <= int.MaxValue;
            bool fitsInUInt = number >= uint.MinValue && number <= uint.MaxValue;
            bool fitsInLong = number >= long.MinValue && number <= long.MaxValue;

            if (fitsInSByte || fitsInByte || fitsInShort || fitsInUShort || fitsInInt || fitsInUInt || fitsInLong)
            {
                Console.WriteLine($"{number} can fit in:");

                if (fitsInSByte)
                {
                    Console.WriteLine("* sbyte");
                }
                if (fitsInByte)
                {
                    Console.WriteLine("* byte");
                }
                if (fitsInShort)
                {
                    Console.WriteLine("* short");
                }
                if (fitsInUShort)
                {
                    Console.WriteLine("* ushort");
                }
                if (fitsInInt)
                {
                    Console.WriteLine("* int");
                }
                if (fitsInUInt)
                {
                    Console.WriteLine("* uint");
                }
                if (fitsInLong)
                {
                    Console.WriteLine("* long");
                }
            }
            else
            {
                Console.WriteLine($"{number} can't fit in any type");
            }
        }
    }
}
