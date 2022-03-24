import java.util.Scanner;

public class J9316 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        
        int N = scanner.nextInt();
        scanner.close();
        for(int i=1; i<N+1; i++){
            System.out.println("Hello World, Judge " + i + "!");
        }
    }    
}
