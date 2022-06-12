package Loops;

import java.util.Scanner;

public class Desafio3 {

    public static void main(String[] args) { //throws IOException {
        Scanner scan = new Scanner(System.in);
//declare suas variaveis corretamente
        int a = 0;
        int b = 0;
        int c = 0;
        int d = 0;

        int valor = 0;



//continue a solução
        for (int i = 0; i < 5; i++) {

            System.out.println("Digite um número");
            valor = scan.nextInt();

            if (valor == 0) {

                a++;

            } else {

                if (valor < 0) {
                    d++;
                }

                if (valor > 0) {
                    c++;
                }

                if (valor % 2 == 0) {
                    a++;
                }

                if (valor % 2 != 0) {
                    b++;
                }

            }

        }
//insira suas variaveis corretamente
        System.out.println(a + " par(es)");
        System.out.println(b + " impar(es)");
        System.out.println(c + " positivo(s)");
        System.out.println(d + " negativo(s)");

    }
}
