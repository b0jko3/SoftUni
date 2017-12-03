using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Character_Stats
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int currentHealth = int.Parse(Console.ReadLine());
            int maximumHealth = int.Parse(Console.ReadLine());
            int currentEnergy = int.Parse(Console.ReadLine());
            int maximumEnergy = int.Parse(Console.ReadLine());

            int health = maximumHealth - currentHealth;
            int energy = maximumEnergy - currentEnergy;

            Console.WriteLine("Name: {0}", name);
            Console.WriteLine("Health: |" + new string('|', currentHealth) + new string('.', health) + "|");
            Console.WriteLine("Energy: |" + new string('|', currentEnergy) + new string('.', energy) + "|");
        }
    }
}
