using System;
using System.Collections.Generic;

namespace _12.Master_Number
{
    class Program
    {
        public static void Master(int num)
        {
            for (int i = 0; i < num; i++)
            {
                if (i.ToString().Contains("0") ||
                    i.ToString().Contains("2") ||
                    i.ToString().Contains("4") ||
                    i.ToString().Contains("6") ||
                    i.ToString().Contains("8"))
                {
                    int j = 0;
                    int k = i.ToString().Length - 1;

                    while ((j < (i.ToString().Length / 2) && k > (i.ToString().Length / 2)) && i.ToString()[j] == i.ToString()[k])
                    {
                        j++;
                        k--;
                        if (i.ToString()[j] == i.ToString()[k] && i.ToString()[j + 1] == i.ToString()[k - 1])
                        {
                            int temp = 0;

                            for (int l = 0; l < i.ToString().Length; l++)
                            {
                                temp = temp + i.ToString()[l] - 48;
                            }
                            if (temp % 7 == 0)
                            {
                                Console.WriteLine(i);
                            }
                        }

                    }
                }
            }
        }

        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            Master(n);
        }
    }
}