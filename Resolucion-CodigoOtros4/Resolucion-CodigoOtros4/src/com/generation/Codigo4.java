package com.generation;
//Coloque el archivo en el paquete correcto

import java.util.Scanner;

//coloque variables mas descriptvas
public class Codigo4 {

  // no estaba el metodo main Y le di indentacion a todo el codigo 
  public static void main(String[] args) {

    //Faltaba el import de la clase scanner, y no se llamaba correctamente al constructor
    Scanner sc = new Scanner(System.in);

    //el metodo print no añadia el salto de linea y elimine el scanner repetido
    System.out.println("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String player1 = sc.nextLine();

    System.out.println("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
    String player2 = sc.nextLine();

    // elimine un parentesis de mas y cambie la forma en que se comparaban los objetos String
    if (player1.equals(player2)) {
      System.out.println("Empate");
    } else {
      int winner = 2;
      //el switch no tenia break
      switch (player1) {
        case "piedra":
          if ("tijeras".equals(player2)) {
            winner = 1;
          }
          break;
          // no estaba cerrada una llave del condicional
        case "papel":
          if ("piedra".equals(player2)) {
            winner = 1;
          }
          break;
        case "tijera":
          if ("papel".equals(player2)) {
            winner = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + winner);
    }

  }
}