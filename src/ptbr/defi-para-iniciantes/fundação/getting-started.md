# Começando com segurança

## Glossário

[[toc]]

## Introdução

No mundo das criptomoedas, segurança não é apenas uma recomendação — é uma
necessidade absoluta. A natureza descentralizada das blockchains oferece
liberdade financeira sem precedentes, mas também exige que os usuários assumam
total responsabilidade por seus ativos digitais. Uma única falha na gestão de
chaves privadas ou senhas pode resultar na perda irreversível de fundos.

Neste capítulo, vamos explorar como criar e gerenciar uma wallet Bitcoin de
forma segura 100% offline, utilizando ferramentas robustas como o sistema
operacional Tails e o cliente leve Electrum . O Tails é projetado para preservar
sua privacidade e anonimato, enquanto o Electrum oferece uma interface simples e
confiável para interagir com a blockchain do Bitcoin. Juntos, eles formam uma
solução poderosa para proteger suas criptomoedas contra ameaças externas e
internas e que cabem na palma da sua mão através de um pendrive.

Além disso, aprenderemos a usar o KeePassXC , um gerenciador de senhas seguro,
para armazenar credenciais importantes, como chaves privadas e senhas. Este
capítulo também abordará como configurar um Persistent Storage no Tails para
garantir que seus dados permaneçam acessíveis entre sessões, e como transferir
suas senhas para dispositivos móveis para facilitar o acesso seguro.

Ao final deste guia, você terá uma compreensão clara de como configurar uma
wallet Bitcoin com segurança, protegendo seus ativos contra ataques
cibernéticos, phishing e erros humanos.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos em mãos:

- Um pendrive de 8GB ou mais
- Um computador sem conexão à internet, isto mesmo que leu, sem conexão à
  internet, remova o cabo de rede ou desconecte o wi-fi para garantir a
  segurança absoluta da sua carteira.
- Tails instalado em um pendrive

## Configurando o Persistent Storage

O **Persistent Storage** é uma funcionalidade essencial do Tails que permite
salvar arquivos e configurações entre diferentes sessões. Sem ele, todos os
dados seriam perdidos ao reiniciar o sistema, já que o Tails opera em modo "ao
vivo" (live OS). Vamos configurá-lo para garantir que nossas senhas, wallets e
outros dados importantes permaneçam acessíveis.

### Passo 1: Acessando as Configurações do Persistent Storage

1. Abra o menu **Applications** no canto superior esquerdo da tela.
2. Navegue até a aba **Persistent Storage**.
   ![Home_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Home_1.png)

### Passo 2: Criando o Persistent Storage

1. Clique em **Continue** para iniciar o processo de configuração.
   ![Persistent_Storage_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_1.png)
2. Você será solicitado a criar uma senha para acessar o Persistent Storage.
   Para isso, utilizaremos o **KeePassXC**, um gerenciador de senhas seguro,
   para gerar uma senha forte.

### Passo 3: Gerando uma Senha Segura com KeePassXC

1. Abra o KeePassXC no menu **Applications**.
   ![Home_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Home_1.png)
2. Na tela inicial, clique em **Password Generator**.
   ![KeePass_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_2.png)
3. Na aba **Passphrase**, gere uma sequência de 7 palavras aleatórias. Anote
   essas palavras cuidadosamente em um papel, pois elas serão usadas como senha
   para o Persistent Storage.
   ![KeePass_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_3.png)

4. Volte à janela do Persistent Storage, insira a senha gerada e clique em
   **Create Persistent Storage**.
   ![Persistent_Storage_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_2.png)

5. Após a criação, habilite a opção **Electrum Bitcoin Wallet** nas
   configurações do Persistent Storage. Isso permitirá que você salve dados
   relacionados à sua wallet entre sessões.
   ![Persistent_Storage_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_3.png)

    <br />

   ![Persistent_Storage_4](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_4.png)

## Aprendendo a Armazenar Senhas no KeePassXC

<br />

<p align="center">
    <img src="https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/logo.png" alt="logo_keepass">
</p>

<br />

O KeePassXC é uma ferramenta indispensável para quem deseja gerenciar senhas de
forma segura. Ele permite criar bancos de dados criptografados onde todas as
suas credenciais podem ser armazenadas e protegidas por uma senha mestra e/ou um
arquivo de chave.

### Passo 1: Criando um Novo Banco de Dados

1. Abra o KeePassXC e clique em **New Database**.
   ![KeePass_4](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_4.png)
2. Nomeie o banco de dados e clique em **Continue**.
   ![KeePass_5](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_5.png)

### Passo 2: Configurando Medidas de Segurança

1. Aumente o tempo de descrição (description time) para 2,5 segundos para
   dificultar ataques de força bruta.
   ![KeePass_6](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_6.png)
2. Gere uma senha forte com pelo menos 20 caracteres e salve-a em um local
   seguro.
   ![KeePass_8](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_8.png)
3. Adicione um **Key File** como camada extra de segurança. Salve este arquivo
   no Persistent Storage para maior proteção.
   ![KeePass_9](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_9.png)
   ![KeePass_10](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_10.png)
   ![KeePass_11](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_11.png)

4. Salve o banco de dados no Persistent Storage, preferencialmente na mesma
   pasta do Key File.
   ![KeePass_12](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_12.png)

### Passo 3: Salvando Senhas no KeePassXC

1. Para adicionar uma nova entrada, clique em **Add Entry**.
   ![KeePass_14](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_14.png)
2. Insira os detalhes da senha, como titulo e senha gerada anteriormente.
   ![KeePass_15](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_15.png)
   ![KeePass_16](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_16.png)

## Criando uma Wallet Segura com Electrum

Agora que temos nosso ambiente configurado, podemos criar uma wallet Bitcoin
usando o Electrum. Este cliente leve é conhecido por sua simplicidade e
segurança, além disso é nativo do Tails o que o torna perfeito como primeira
**wallet**.

### Passo 1: Iniciando o Electrum

1. No menu **Applications**, navegue até **Internet** e selecione **Electrum
   Bitcoin Wallet**.
   ![Home_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Home_2.png)
2. Escolha um nome para sua wallet e clique em **Next**.
   ![Wallet_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_1.png)

### Passo 2: Gerando uma Seed Segura

1. Selecione **Standard Wallet** e clique em **Next**.
   ![Wallet_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_2.png)
2. Selecione **I already have a seed** e clique em **Next**.
   ![Wallet_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_3.png)
3. Clique em **Options**, habilite a opção **Extend this seed with custom
   words**, selecione **BIP39** e dê **Ok**.
   ![Wallet_4](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_4.png)
   ![Wallet_5](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_5.png)
4. Use o KeePassXC para gerar uma **Passphrase** de 24 palavras. Adicione uma
   palavra adicional personalizada(de sua livre escolha) para totalizar 25
   palavras, aumentando a segurança.
   ![Wallet_6](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_6.png)
5. Coloque uma senha de sua escolha só para poder acessar a wallet e não se
   esqueça de cadastrar essa senha no **KeePassXC** para backup seguro.
   ![Wallet_7](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_7.png)
6. Salve a **Master Public Key** e as **Private Keys** no KeePassXC para backup
   seguro.
   ![Wallet_9](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_9.png)
   ![Wallet_12](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_12.png)

## Transferindo Senhas para Dispositivos Móveis

Para facilitar o acesso às suas senhas em movimento, você pode transferir o
banco de dados do KeePassXC para um dispositivo móvel.

1. Instale um aplicativo compatível com KeePassXC no seu celular.
   ![Mobile_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Mobile_1.png)
2. Conecte o celular ao computador via USB e transfira os arquivos do banco de
   dados e o Key File.
   ![KeePass_17](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_17.png)
3. Abra o aplicativo no celular e conecte-se ao banco de dados.
   ![Mobile_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Mobile_2.png)
4. Após o login bem-sucedido, você poderá acessar suas senhas diretamente do
   celular.
   ![Mobile_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Mobile_3.png)

## Conclusão

Com este guia, você aprendeu a configurar um ambiente seguro para gerenciar suas
criptomoedas, desde a criação de um Persistent Storage no Tails até a geração de
uma wallet Bitcoin com o Electrum. Além disso, exploramos como usar o KeePassXC
para armazenar senhas e chaves privadas de forma segura, garantindo que seus
ativos estejam protegidos contra ameaças externas.

Lembre-se: segurança é um processo contínuo. Mantenha suas ferramentas
atualizadas, sempre acesse sua **wallet** offline no Tails e use senhas fortes e
nunca compartilhe suas chaves privadas ou senhas com ninguém. Com essas
práticas, você estará bem preparado para navegar no mundo das criptomoedas com
confiança.
