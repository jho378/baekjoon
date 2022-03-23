import java.util.Scanner;

public class J2577{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        int A = in.nextInt();
        int B = in.nextInt();
        int C = in.nextInt();
        in.close();
        
        String str = Integer.toString(A*B*C);
        

        for(int i=0; i<10; i++){
            int count = 0;
            for(int j=0; j<str.length(); j++){
                if((str.charAt(j)-'0')==i) count++;
            } 
            System.out.println(count);
        }
    }
}