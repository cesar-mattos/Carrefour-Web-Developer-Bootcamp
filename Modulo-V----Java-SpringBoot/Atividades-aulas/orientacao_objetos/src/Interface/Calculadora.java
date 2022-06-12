package Interface;

public class Calculadora implements OperacoesMatematicas {

    @Override
    public void adicao(double operando1, double operando2) {
        System.out.println("Adição: " + (operando1 + operando2));
    }

    @Override
    public void subtracao(double operando1, double operando2) {
        System.out.println("Subtração: " + (operando1 - operando2));
    }

    @Override
    public void multiplicacao(double operando1, double operando2) {
        System.out.println("Multiplicação: " + (operando1 * operando2));
    }

    @Override
    public void divisao(double operando1, double operando2) {
        System.out.println("Divisão: " + (operando1 / operando2));
    }
}
