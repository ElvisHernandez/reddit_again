# Express Sequelize Template

### Package's Used

- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/v5/manual/migrations.html)

---

## Installation and configuration

```
git clone
cd nameofapp
yarn
```

---

#### Configure Environment

Set the username attribute in the `config/config.js` to your computers Postgres username.

Make sure your PostgreSQL server is running, then in the terminal run:

Locally

```
sequelize db:create
```

and finally:

```
yarn dev
```

---

#### After you have generated migrations and or seed files run the respective commands.

```
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

[Heroku](https://id.heroku.com/login)

```
heroku run sequelize db:migrate
heroku run sequelize db:seed:all
```


(Routes for Reddit Express Postgres lesson)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9c1cd960ef32a75fec0d)
