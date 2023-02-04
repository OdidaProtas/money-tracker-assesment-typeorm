## Author: Brian Protas Odida

## Date: 02/02/2022

---

# Money Tracker API Test

#### Environment requirements

- Node.js
- Git

#### Technical requirements

- Next.js
- TypeScript
- TypeORM
- Sqlite

## Installation

On the terminal, clone this repository: `git clone https://github.com/OdidaProtas/money-tracker-assesment-typeorm.git
`

Move to the newly created "monyetracker-assesment-api" : `cd money-tracker-assesment-typeorm`

Install Project dependencies: `yarn` or `npm install`


Run dev server: `yarn  start:dev` or `npm run start:dev`

visit Homepage: `http://localhost:3000` : returns "Hello World"

Swagger docs: `htt://localhost:3000/docs`

---

### Api Actions

Users:

Endpoint: `http://localhost:3000/users`

- Create A user

  - Method: `POST`
  - Endpoint: `/`
  - Body: {firstName, lastName, username}

- Get user profile with balances

  - Method: `GET`
  - Endpoint: `/{{USER_ID}}`

Wallets:

Endpoint: `http://localhost:3000/wallets`

- Create A wallet

  - Method: `POST`
  - Endpoint: `/`
  - Body: {userId,name}

- Wallet detail, balance and transactions

  - Method: `GET`
  - Endpoint: `/{{WALLET_ID}}`

Transactions:

Endpoint: `http://localhost:3000/transactions`

1.  Adding Credit (Income)

    - Type has tp be "credit"

        - Method: `POST`
        - Endpoint: `/`
        - Body:
      {walletId,
      type = credit,
      description,
      amount}
      }



2.  Adding Debit (Expenses) 

    - Type has to be "debit"

        - Method: `POST`
        - Endpoint: `/`
        - Body: {walletId,
    type = debit,
    description,
    amount}
    }
