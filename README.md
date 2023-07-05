# CoC Bot - o Vincent Van CoC 🌴 🥥

Bot em desenvolvimento, criado com o intuito de auxiliar os guardiões da Call of Code em algumas pequenas tasks e divertir os integrantes da equipe com um projetinho descontraído :D

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalação

De que coisas você precisa para instalar o software e como instalá-lo?

Antes de tudo, para rodar o bot, é preciso instalar o node.js:
```
sudo apt-get install -y nodejs
```
Uma vez com o node instalado, abra a pasta do projeto, e instale as seguintes dependências no projeto:
```
npm install discord.js
npm install dotenv
npm install cron
```
Agora, vamos adicionar o arquivo de conexão do bot, basta adicionar o arquivo ".env" no projeto, e nele, adicionar os ids necessários para o funcionamento
das features do bot, todos os ids necessários estão no import do dotenv, no index.js, na linha 3.
Vale ressaltar que, caso esteja em situação de manutenção do bot da Call of Code, existe um .env pronto do nosso bot, é possível encontrar ele no servidor da praia secreta do CoC, ou entrando em contato com o guardião pra mais informações.
Para conseguir os ids de canais, roles, membros e servidores, basta ativar o modo desenvolvedor no discord e copiar os ids necessários clicando com o botão direito do mouse no item de interesse, e em seguida em "Copiar ID", quase tudo no Discord é identificado por esses IDs, basta procurar bem, que vai ser possível implementar a funcionalidade que você quiser com seu bot.
Para configurar o arquivo ".env" corretamente, basta colocar o nome da constante, e seu valor logo em seguida, sem aspas, da seguite maneira:
```
NOME=VALOR;
```
Pronto, agora que o arquivo de conexão já está pronto e as dependências estão instaladas, basta iniciar o bot e testar:

```
node index.js
```

Espero que tenha ficado claro :D
Estarei disponível para tirar eventuais dúvidas, pode me chamar no Discord (joaolucas8087).
Valeu!


## ✒️ Autores

Esse projeto é do CoC inteiro, então não citarei nomes, todo mundo do CoC participou e contribuiu de alguma maneira pra esse bot funcionar, meu sincero obrigado a todos S2.

