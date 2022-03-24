import java.util.Scanner;

public class J10996{
    public static void main(String[] args){
       Scanner in = new Scanner(System.in);
       
       int n = in.nextInt();
       in.close();
       if(n==1) System.out.println("*");
       else{
           for(int i=0; i<2*n; i++){
               if(i%2==0){
                   String str = "* ".repeat((n+1)/2);
                   System.out.println(str);
               }
               else{
                   String str = " *".repeat(n/2);
                   System.out.println(str);
               }
           }
       }
    }
}