import java.util.Scanner;

public class J1138{
    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        String n = scanner.nextLine();
        String string = scanner.nextLine();
        
        scanner.close();
        int N = Integer.parseInt(n);
        String[] stringArr = string.split(" ");

        int[] data = new int[N]; 

        for(int i=0; i<N; i++){
            data[i] = Integer.parseInt(stringArr[i]);
        }
        
        int[] result = new int[N];

        for(int i=0; i<N; i++){
            int idx = 0;
            for(int j=0; j<N; j++){
                if(result[j]!=0 && result[j]<= i+1) continue;
                if(data[i]==idx){
                    result[j] = i+1;
                    break;
                }
                if(result[j]==0 || result[j]>i+1) idx+=1;
                else continue;
            }
        }
        for(int i=0; i<N; i++){
            System.out.print(result[i]);
            if(i<N-1){
                System.out.print(" ");
            }
        }
    }
}