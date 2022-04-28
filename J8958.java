import java.util.Scanner;

public class J8958{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        
        int point = 1;
        for (int i=0; i<n; i++){
            String str = scanner.next();
            int score = 0;
            for (int j=0; j<str.length(); j++){
                if (str.substring(j, j+1).equals("O")){
                    score += point;
                    point++;
                }   else {
                    point = 1;
                }
            }
            point = 1;
            System.out.println(score);
        }

    }
}