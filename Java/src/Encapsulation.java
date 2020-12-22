import java.util.*；

public class Encapsulation {
public static void main(String[] args){
    //从键盘中输入一些数
    Scanner scanner = new Scanner(System.in);
    System.out.println("Please input the number of students:");
    int n = scanner.nextInt();

    String[] names = new String[n];
    int[] scores = new int[n];

    for(int i = 0; i < n; ++i){
        System.out.println("Input name and student score" + (i+1) + ",separate by space");
        names[i] = scanner.next();
        scores[i]= scanner.nextInt();
    }

    System.out.println("\nInput:");
    for(int i = 0;i < n; i++){
        System.out.println(names[i] + ":" + scores[i]);
    }
}
}
