public class RodarAplicacao {
    public static void main(String[] args) {


        Carro carro1 = new Carro();

        carro1.setCor("Preto");
        carro1.setModelo("Sandero");
        carro1.setCapacidadeTanque(45);

        System.out.println(carro1.getCor());
        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println(carro1.totalValorTanque(7.19));

        Carro carro2 = new Carro("Cinza", "Palio", 40);

        System.out.println(carro2.getCor());
        System.out.println(carro2.getModelo());
        System.out.println(carro2.getCapacidadeTanque());
        System.out.println(carro2.totalValorTanque(7.19));




    }
}
