
import java.util.Scanner;


public class LabA4 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number for factorisation...");
        int n =sc.nextInt();
        int ans = 1;

        for (int i = n; i >= 1; i--) {
            ans = ans * i;
        }

        System.out.println("Factorial of"+" "+n+"is :- "+ans);
    }
}
