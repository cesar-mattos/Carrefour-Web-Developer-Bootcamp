package com.dio.calculadora;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int a, b;
		
		System.out.println("Digite o primeiro valor: ");
		a = scan.nextInt();
		System.out.println("Digite o segundo valor: ");
		b = scan.nextInt();
		
		int adicao = adicao(a,b);
		int subtracao = subtracao(a,b);
		int multiplicacao = multiplicacao(a,b);
		int divisao = divisao(a,b);
		
		System.out.println(adicao);
		System.out.println(subtracao);
		System.out.println(multiplicacao);
		System.out.println(divisao);
		
		
	}
	
	public static int adicao(int a , int b) {
		return a + b;
	}
	
	public static int subtracao(int a , int b) {
		return a - b;
	}
	
	public static int multiplicacao(int a , int b) {
		return a * b;
	}
	
	public static int divisao(int a , int b) {
		return a / b;
	}

}
