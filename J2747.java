import java.util.Scanner;

public class J2747 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        in.close();
        int[] arr = new int[n+1];
        int i=0;
        while(i<n){
            if(i==0) arr[i] = 0;
            else if(i==1) arr[i] = 1;
            else arr[i] = arr[i-1] + arr[i-2];
            i++;
        }
        System.out.println(arr[n]);
    }        
}
