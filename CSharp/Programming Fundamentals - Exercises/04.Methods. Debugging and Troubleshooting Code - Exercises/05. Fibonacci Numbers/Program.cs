using System;

namespace _05.Fibonacci_Numbers
{
    class Program
    {
        public static int FibonacciNumbers(int numbers)
        {
            int firstNumber = 1;
            int secondNumber = 1;
            int result = 0;

            if (numbers == 0 || numbers == 1)
            {
                return 1;
            }
            else if (numbers == 2 || numbers == 3)
            {
                return numbers;
            }
            else
            {
                for (int i = 1; i < numbers; i++)
                {
                    result = firstNumber + secondNumber;
                    firstNumber = secondNumber;
                    secondNumber = result;
                }
                return result;
            }
        }

        static void Main()
        {
            int numbers = int.Parse(Console.ReadLine());

            Console.WriteLine(FibonacciNumbers(numbers));
        }
    }
}
