import java.io.IOException;

public class J17827 {
    public static StringBuilder sb = new StringBuilder();
    public static java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));

    public static void main(String[] args) throws IOException{
        String s = br.readLine().trim();
        String str[] = s.split(" ");
        int nodes = Integer.parseInt(str[0]);
        int N = Integer.parseInt(str[1]);
        int loop = Integer.parseInt(str[2]);
        
        s = br.readLine().trim();
        str = s.split(" ");

        int[] node = new int[nodes];
        for(int i=0; i<nodes; i++){
            node[i] = Integer.parseInt(str[i]);
        }

        for(int i=0; i<N; i++){
            int x = Integer.parseInt(br.readLine());
            if (x<nodes){
                System.out.println(node[x]);
            }   else {
                x -= (loop-1);
                x %= (nodes-loop+1);
                System.out.println(node[loop-1+x]);
            }
            
        }
    }
}
