chcp 65001

copy "list\*개 이하 모음 - *.json" .

::

copy "list\*일 연속 상승 후 - 1일 - -03*.json" .
copy "list\*일 연속 상승 후 - 1일 - -05*.json" .

::

copy "list\*일 연속 하락 후 - 1일 - 03*.json" .
copy "list\*일 연속 하락 후 - 1일 - 05*.json" .

copy "list\* - 수급 - *.json" .

cmd /k
