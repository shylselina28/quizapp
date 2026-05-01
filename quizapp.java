import java.util.Scanner;

public class QuizApp {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int score = 0;

        System.out.println("Quiz Application");

        System.out.println("1. Capital of India?");
        System.out.println("a) Chennai  b) Delhi  c) Mumbai");
        char ans1 = sc.next().charAt(0);

        if(ans1 == 'b') score++;

        System.out.println("2. 5 + 3 = ?");
        System.out.println("a) 6  b) 8  c) 10");
        char ans2 = sc.next().charAt(0);

        if(ans2 == 'b') score++;

        System.out.println("3. Java is?");
        System.out.println("a) Language  b) Animal  c) Game");
        char ans3 = sc.next().charAt(0);

        if(ans3 == 'a') score++;

        System.out.println("Your Score: " + score + "/3");

        sc.close();
    }
}