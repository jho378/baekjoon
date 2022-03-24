import java.util.Scanner;
public class J10798 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        
        String[] strArr = new String[5];
        
        for(int i=0; i<5; i++){
            strArr[i] = in.nextLine();
        }
        in.close();
        String res = "";

        for(int j=0; j<15; j++){
            for(int i=0; i<5; i++){
                if(strArr[i].length() <= j){
                    continue;
                }
                else{
                    res = res + strArr[i].charAt(j);
                }
            }
        }
        System.out.println(res);
    }
}
