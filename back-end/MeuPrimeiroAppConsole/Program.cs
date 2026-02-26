// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");
Console.WriteLine("Olá, Universo! Eu me chamo Lucas e sou um desenvolvedor .NET. 🚀");


int numero = 10;
double pi = 3.1415;
char letra = "U+0041";
char letraA = "A";
bool isTrue = false;
string mensagem = "Olá, Mundo!";



Console.WriteLine($"{letra}  {letraA}");

Console.WriteLine("Bem-vindo ao C#");
Console.WriteLine("Informe seu nome: ");
nome = Console.ReadLine();
Console.WriteLine("Informe sua idade: ");
int idade = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"Seu nome é {nome} e tenho {idade} anos de idade!");



Console.WriteLine("Digite o primeiro número: ");
double numero1 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Digite o segundo número: ");
double numero2 = Convert.ToDouble(Console.ReadLine());

Console.Write($"A soma dos números, {numero1} e {numero2} é: {numero1} + {numero2}");
double sub_nums = numero1 - numero2;
Console.WriteLine("A subtração dos números, " + numero1 + " e " + numero2 + " é: " + numero1 - numero2);

double mult_nums = numero1 * numero2;
string mensagem = string.Format("A multiplicação dos números, {0} e {1} é: {2}", numero1, numero2, mult_nums);
Console.WriteLine(mensagem);

double dividir = numero1 / numero2;
Console.Write($"A divisão dos números, {numero1} e {numero2} é: {dividir}");