Feature: Login Manager Passwords

Scenario: Manager_Id1
Given url git
Given datalari kullanarak sayfaya gir
|username|password|
|Manager71|Manager71.|
Given login butonuna tikla
Then sayfaya girildigini onayla
  
Scenario: Manager_Id2
Given url git
Given datalari kullanarak sayfaya gir
|username|password|
|Manager2|Manager2!|
Given login butonuna tikla
Then sayfaya girildigini onayla