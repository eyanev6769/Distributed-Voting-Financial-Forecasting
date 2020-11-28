import java.security.SecureRandom;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.SecretKeyFactory;

function hash_pass(password) {
      SecureRandom random = new SecureRandom();
      byte[] salt = new byte[16];
      random.nextBytes(salt);
      KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 100);
      SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
return factory.generateSecret(spec).getEncoded();
}

Предположих, че идеята за полето HASH в таблицата USER е за хеширане на въведената парола още при клиента и изпращане към сървъра за сравнение/проверка на HASH стойността, а не паролата като стринг от съображения за сигурност.

Реших да напиша функция за хеширане чрез използване на готови функции в java библиотеките, намерих такива в интернет, но срещнах непреодолим проблем при импорт на пакетите в javascript.

Ще се опитам да напиша в Java един алгоритъм за хеширане, проверен в практиката - регистър с обратни връзки. Прилагам разработен от мен подобен  код на Delphi

function ConvToCRC(S:String): String;
var j:integer;
begin

  for j := 1 to 8 do el[j] := 0;

  for j:=1 to length(s) do
      shiftleft(s[j]);

  // result
  for j := 1 to 8 do
    case el[j] of
      0..9: result := result + Chr(el[j] + Ord('0'));
      10:   result := result + 'A';
      11:   result := result + 'B';
      12:   result := result + 'C';
      13:   result := result + 'D';
      14:   result := result + 'E';
      15:   result := result + 'F';
      else  result := result + 'X'
    end;                              // final result in hexadecimal code


end;


procedure shiftleft(ch: Char);
var
  i: Integer;
  old: array [1..8] of Integer; // Register to Shift left
begin
  // save old
  for i := 1 to 8 do old[i] := el[i];

  // add
  el[1] := old[3] + Ord(ch) + old[8]; // obratna vryzka
  el[2] := old[1] * 2;
  el[3] := old[2] div 2;
  el[4] := old[3] * 2;
  el[5] := old[4] div 2;
  el[6] := old[5] * 2;
  el[7] := old[6] div 2;
  el[8] := old[7] * 2;

  // cut over 16
  for i := 1 to 8 do el[i] := el[i] mod 16;
end;

  