package Loops;

import java.util.Scanner;

public class MaiorMedia {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int numero;
        int maior = 0;
        int soma = 0;

        int count = 0;

        do {
            System.out.println("Número: ");
            numero = scan.nextInt();

            if (numero > maior) maior = numero;



            System.out.println("Maior: " + maior);


            count = count + 1;

            soma = soma + numero;
            int media = soma / count;
            System.out.println("Media: " + media);

        } while(count < 5);
    }
}
