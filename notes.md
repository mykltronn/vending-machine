## Vending Machine JSON API

a vending machine stores items
-- those items have:
-- -- name
-- -- cost
-- -- quantity

a user accesses the vending machine, they'll see all the items




items
purchases

should be able to find out how much money is in machine
might want store what item was logged and how much was pais doe ir.

all responses from the API should be an object with a "status" key and a "data" key




So a response is a transaction?
// screw that v v v v
{
  "status": "success" or "failure",
  "data": [
    {
      "id": 1,
      "description": "corn chips",
      "cost": 150,
      "quantity": 4
    }
  ]
}
