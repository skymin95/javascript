<?PHP
// 세션 시작
session_start();
// 관리자 로그인
if($shop_logon[0] == "admin"){
  echo(<"<meta http-equiv = 'refresh' content = '0;url=./product_list.php'>\n");
  // 데이터베이스 선택
  $conn = mysql_connect('localhost', 'root', 'root');

  $db_status = mysql_select_db('shoppingmall');
  if(!$db_status){
    echo("DB_ERROR");
    exit;
  }

  // 날짜를 형식에 맞게(0000-00-00)고칩니다
  $cur_date = getdate();
  $mem_date = $cur_date[year];

  if($cur_date[mon] < 10)
    $mem_date .= "-0" . $cur_date[mon];
  else
    $mem_date .= "-" . $cur_date[mon];

    if($cur_date[mday] < 10)
    $mem_date .= "-0" . $cur_date[mday];
  else
    $mem_date .= "-" . $cur_date[mday];

  // 이미지도 수정하여야 하는지를 확인합니다
    if(trim($goodsimage_name) == ""){
      $query = "UPDATE goods_tab SET goods_code= $goods_code ,
      goods_name=$goods_name, goods_country=$goods_country,
      goods_price=$goods_price, goods_explain=$goods_explain,
      goods_date=$mem_date where goods_id = $goods_id";

      $result = mysql_query($query);
      if(!$result) {
        echo("<script>window.alert('쿼리에 에러가 발생하였습니다.');</script>");
        exit;
      }
    } else{
      if(trim($old_image) !=""){
        $un_file = "./file/" . $old_image;
        if(!unlink($un_file)){
          echo("기존 파일 삭제에 실패하였습니다.");
          exit;
        }
      }
      $save_image = $goods_id . "_" . $goodsimage_name;
      $file_exist = file_exists("./file/$save_image");
      if($file_exist){
        echo("이미 존재하는 파일입니다.");
        exit;
      }
      if(!copy($goodsimage, "./file/$save_image")){
        echo("파일 저장에 실패하였습니다.");
        exit;
      }
      if(!unlink($goodsimage)){
        echo("임시 파일 삭제에 실패하였습니다.");
        exit;
      }


      $query = "UPDATE goods_tab SET goods_code=$goods_code,
      goods_name=$goods_name, goods_country=$goods_country,
      goods_price=$goods_price, goods_image=$save_image,
      goods_explain=$goods_explain, goods_date=$mem_date where goods_id=$goods_id";
      

      $result = mysql_query($query);
      if(!$result){
        echo("<script>window.alert('쿼리에 에러가 발생하였습니다');</script>");
        exit;
      }
    }
}

?>