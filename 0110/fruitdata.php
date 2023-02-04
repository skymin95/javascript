<?php
$low = $_POST['low'];
$fruit = array("사과"  => 10,
"배" => 20,
"복숭아" => 30,
"수박" => 40,
"감" => 50,
"토마토" => 60,
"바나나" => 70,
"키위" => 80,
"파인애플" => 90,
"대추" => 100);
print "가격이".$low. "원 이하인 과일의 목록입니다.";
print "<table border=1><tr><th>이름</th><th>가격</th>";
foreach($fruit as $name => $price)
{
  if($price < $low)
  {
    print"<tr><td>" . $name."</td><td>" . $price. "</td></tr>";
  }
}
print"</table>"
?>

<!-- 
  $변수명
  $_post 통신방식
  array(배열)
  => :크거나 같다
  print:화면 출력


-->