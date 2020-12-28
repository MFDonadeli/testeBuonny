# Customer API REST

Este projeto contém um back-end que é uma API REST e um front-end para resolução do problema proposto pelo Teste Buonny

## Tecnologia 

Back-end Cake 3 com Front-end em Vue.js e banco de dados MySQL. A solução pode ser encontrada em dois diretórios. O Back-end se encontra no diretório app e o front-end no diretório client.

## Documentação da API

https://documenter.getpostman.com/view/13904826/TVsyejtu


## Executando tudo

É necessário ter instalado no seu ambiente os gerenciadores de pacote Composer e NPM.

1. Faça o clone da solução do git: 

```
git clone https://github.com/MFDonadeli/testeBuonny.git
```

2. No terminal e dentro da pasta app do projeto importado do git clone execute o seguinte comando:
```
composer install
```

3. Instale os pacotes npm necessários para iniciar o projeto front-end. Para isso vá a pasta client e execute o seguinte comando:
```
npm install
```

4. Crie o banco de dados no seu MySQL usando o arquivo db/script.sql e configure o arquivo app/config/app.php para as configurações do seu banco

5. Configure o caminho do servidor Cake dentro do projeto Vue, acessando o arquivo client/src/store/server.js, configurando a constante SERVER

6. Rode o servidor cake com o comando abaixo (de acordo com o sistema operacional)
```
.\bin\cake server
```

7. Rode o servidor Vue com o comando abaixo (dentro do diretório client)
```
npm run serve
```

8. Acesse a solução através do endereço indicado pelo servidor Vue

