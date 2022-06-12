package Array;

public class OrdemInversa {
    public static void main(String[] args) {

        int[] vetor = {0 , 1, 2, 3, 4, 20};

        System.out.println("Vetor: " + vetor);
        int count = 0;
        while(count < (vetor.length)) {
            System.out.println(vetor[count] + " ");
            count++;
        }

        System.out.println("\nVetor: ");
        for(int i = (vetor.length - 1); i >= 0; i--) {
            System.out.println(vetor[i] + " ");
        }

    }
}
