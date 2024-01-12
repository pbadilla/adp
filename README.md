
# ADP Innovation Labs Pre‐Interview Assignment

Create a simple JavaScript (nodejs) application that makes an HTTP GET request to

https://interview.adpeai.com/api/v1/get-task
and then, using the ID and properes returned, dynamically perform the calculation as instructed.

Once you have your ID and your result, make an HTTP POST request to
https://interview.adpeai.com/api/v1/submit-task
with a JSON POST body including the properes id and result.

## Authors

- [@pbadilla](https://www.github.com/pbadilla)


## Demo

Insert gif or link to demo


## Run Locally

Clone the project

```bash
  git clone https://github.com/pbadilla/adp
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```

Watch the server

```bash
  yarn start:server
```

Linter

```bash
  yarn lint 
```
or
```bash
  yarn lint:fix
```
Test   
```bash
  yarn test
```