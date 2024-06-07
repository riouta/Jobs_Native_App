import java.nio.charset.Charset;
import java.util.SortedMap;

public class CharsetCheck {
    public static void main(String[] args) {
        SortedMap<String, Charset> charsets = Charset.availableCharsets();
        for (String name : charsets.keySet()) {
            System.out.println(name);
        }
    }
}
