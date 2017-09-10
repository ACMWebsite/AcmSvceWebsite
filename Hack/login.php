<?php
  $api = new Instamojo\Instamojo('52292c308c428b89fbd26f1320d5bcb4', 'e94f5c790fc8bc18f56b838c83e3cd83');
  try {
    $response = $api->paymentRequestCreate(array(
        "purpose" => "H.A.C.C 2017",
        "amount" => "100",
        "send_email" => true,
        "email" => "rewopsri2@gmail.com",
        "redirect_url" => "http://www.example.com/handle_redirect.php"
        ));
    print_r($response);
  }
  catch (Exception $e) {
    print('Error: ' . $e->getMessage());
  }
  echo 's';
?>
