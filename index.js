public class ClassificadorHeroi {
    public static void main(String[] args) {
        // Cria um objeto Scanner para a entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // Solicita ao usuário o nome e a quantidade de experiência (XP) do herói
        System.out.print("kakaroto");
        String nomeHeroi = scanner.nextLine();
        System.out.print( 8000 );
        int xpHeroi = scanner.nextInt();

        // Utiliza uma estrutura de decisão para determinar o nível do herói com base na quantidade de XP
        String nivel;
        if (xpHeroi < 1000) {
            nivel = "Ferro";
        } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
            nivel = "Bronze";
        } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
            nivel = "Prata";
        } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
            nivel = "Ouro";
        } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
            nivel = "Platina";
        } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
            nivel = "Ascendente";
        } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Exibe a mensagem com o nome e o nível do herói
        System.out.println("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);

        // Fecha o Scanner
        scanner.close();
    }
}

    