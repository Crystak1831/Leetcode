import java.util.*;


public class Group_Anagrams_49 {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs.length == 0) return new ArrayList();
        Map<String, List> ans = new HashMap<String, List>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = String.valueOf(ca);
            System.out.println(ca);

            if (!ans.containsKey(key)) ans.put(key, new ArrayList());
            ans.get(key).add(s);
        }
        return new ArrayList(ans.values());
    }
   /* public static void main(String[] args){
        ArrayList<String> str = new ArrayList<>();
        str.add("abc");
        str.add("bca");
        str.add("tea");
//        System.out.println(str);
//        String[] str = new String["abc", "bca", "tea"];
        System.out.println(groupAnagrams(str));
    }*/

    public static void main(String[] args){
        Group_Anagrams_49 G1 = new Group_Anagrams_49();
        String [] str = new String[]  { "eat", "tea", "tan", "ate", "nat", "bat" };
        System.out.println(G1.groupAnagrams(str));
    }
}



