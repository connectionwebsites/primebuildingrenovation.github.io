<?php


  $userName = $_POST["input-name"];
  $userEmail = $_POST["input-email"];
  $userMsg = $_POST["input-message"];

  $toC = 'connectionwebsites1@gmail.com';

  $subject = 'New customer contact';

  $messageHTML ="        
  
<div style='
  float: left;
  width: 100%;
  height: auto;
  padding: 80px 0%;
'>
  <div style='
      float: left;
      width: 97%;
      height: auto;
      border: 3px solid #aaa;
      border-radius: 8px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      -ms-border-radius: 8px;
      -o-border-radius: 8px;
  '>
      <!--------------------TOP-------------------->
      <div style='
          float: left;
          width: 100%;
          height: auto;
          padding: 20px 0%;
          text-align: center;
      '>
          <!--------------------TITLE-------------------->
          <div style='
              float: left;
              width: 100%;
              height: auto;
              padding: 30px 0%;
          '>
            <div style='
                float: left;
                width: 100%;
                height: auto;
                padding-bottom: 10px;
                font-weight: 600;
                font-size: 190%;
                color: #09f;
            '>
                <span>Connection Websites</span>
            </div>
          </div>
          <!--------------------SUBTITLE-------------------->
          <div style='
              float: left;
              width: 100%;
              height: auto;
              padding-bottom: 20px;
              font-size: 120%;
          '>
              <span>Olá <b>Connection Accounting!</b></span>
          </div>
          <!--------------------TEXT-------------------->
          <div style='
              float: left;
              width: 90%;
              height: auto;
              margin-left: 5%;
              padding-bottom: 20px;
          '>
              <p>Você recebeu uma nova mensagem do formularo do seu website:</p>
          </div>
      </div>
      <!--------------------BOTTOM-------------------->
      <div style='
          float: left;
          width: 100%;
          height: auto;
          border-top: 2px solid #888;
      '>
          <!--------------------BOTTOM UNIT-------------------->
          <div style='
          background-color: #eee; 
          border-bottom: 2px solid #888;
          float: left;
          width: 100%;
          height: auto;
          '>
              <div style='
                  float: left;
                  width: 30%;
                  height: auto;
                  padding: 20px 0%;
                  text-align: center;
                  font-weight: 600;
                  color: #000;
              '>
                  <span>Nome:</span>
              </div>
              <div style='
                  float: left;
                  width: 65%;
                  height: auto;
                  padding: 20px 2%;
                  border-left: 2px solid #888;
              '>
                  <div style='
                      width: 100%;
                      height: auto;
                      color: #444;
                  '>
                      <span>$userName</span>
                  </div>
              </div>
          </div>
          <!--------------------BOTTOM UNIT-------------------->
          <div style='
          background-color: #fff; 
          border-bottom: 2px solid #888;
          float: left;
          width: 100%;
          height: auto;
          '>
              <div style='
                  float: left;
                  width: 30%;
                  height: auto;
                  padding: 20px 0%;
                  text-align: center;
                  font-weight: 600;
                  color: #000;
              '>
                  <span>Email:</span>
              </div>
              <div style='
                  float: left;
                  width: 65%;
                  height: auto;
                  padding: 20px 2%;
                  border-left: 2px solid #888;
              '>
                  <div style='
                      width: 100%;
                      height: auto;
                      color: #444;
                  '>
                      <span>$userEmail</span>
                  </div>
              </div>
          </div>            
          <!--------------------BOTTOM UNIT-------------------->
          <div style='
          background-color: #eee; 
          float: left;
          width: 100%;
          height: auto;
          '>
              <div style='
                  float: left;
                  width: 30%;
                  height: auto;
                  padding: 20px 0%;
                  text-align: center;
                  font-weight: 600;
                  color: #000;
              '>
                  <span>Mensagem:</span>
              </div>
              <div style='
                  float: left;
                  width: 65%;
                  height: auto;
                  padding: 20px 2%;
                  border-left: 2px solid #888;
              '>
                  <div style='
                      width: 100%;
                      height: auto;
                      color: #444;
                  '>
                      <span>$userMsg</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

"
;

  $headers = "From: Connection Websites <connectionwebsites1@gmail.com>\r\n";
  $headers .= "Reply-To: connectionwebsites1@gmail.com\r\n";
  $headers .= "Content-type: text/html\r\n";

  mail($toC, $subject, $messageHTML, $headers);

  echo "true"
?>
