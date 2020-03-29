curl
!#/bin.bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "games": [
    {
      "id": "'"${ID}"'",
      "board": "'"${ARR}"'",
      "player": {
        "id": "'"${ID}"'",
        "email": "'"${EMAIL}"'"
      }
    }

    ]
  }'

echo
