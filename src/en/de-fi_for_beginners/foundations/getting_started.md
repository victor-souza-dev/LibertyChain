# Getting Started Safely

## Glossary

[[toc]]

## Introduction

In the world of cryptocurrencies, security is not just a recommendation — it is
an absolute necessity. The decentralized nature of blockchains offers
unprecedented financial freedom, but it also requires users to take full
responsibility for their digital assets. A single failure in managing private
keys or passwords can result in the irreversible loss of funds.

In this chapter, we will explore how to create and manage a Bitcoin wallet
securely 100% offline, using robust tools such as the Tails operating system and
the lightweight Electrum client. Tails is designed to preserve your privacy and
anonymity, while Electrum offers a simple and reliable interface to interact
with the Bitcoin blockchain. Together, they form a powerful solution to protect
your cryptocurrencies against external and internal threats, all fitting in the
palm of your hand via a USB drive.

Additionally, we will learn how to use KeePassXC, a secure password manager, to
store important credentials such as private keys and passwords. This chapter
will also cover how to set up Persistent Storage in Tails to ensure your data
remains accessible between sessions, and how to transfer your passwords to
mobile devices for secure access.

By the end of this guide, you will have a clear understanding of how to securely
set up a Bitcoin wallet, protecting your assets against cyberattacks, phishing,
and human error.

## Requirements

Before you begin, make sure you have the following requirements at hand:

- A USB drive with 8GB or more
- A computer with no internet connection — that's right, no internet connection;
  remove the network cable or disconnect Wi-Fi to ensure absolute security for
  your wallet.
- Tails installed on a USB drive

## Setting Up Persistent Storage

**Persistent Storage** is an essential feature of Tails that allows you to save
files and settings between different sessions. Without it, all data would be
lost upon reboot, since Tails operates in "live" mode (live OS). Let's set it up
to ensure your passwords, wallets, and other important data remain accessible.

### Step 1: Accessing Persistent Storage Settings

1. Open the **Applications** menu in the upper left corner of the screen.
2. Navigate to the **Persistent Storage** tab.
   ![Home_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Home_1.png)

### Step 2: Creating Persistent Storage

1. Click **Continue** to start the setup process.
   ![Persistent_Storage_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_1.png)
2. You will be prompted to create a password to access Persistent Storage. For
   this, we will use **KeePassXC**, a secure password manager, to generate a
   strong password.

### Step 3: Generating a Secure Password with KeePassXC

1. Open KeePassXC from the **Applications** menu.
   ![Home_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Home_1.png)
2. On the home screen, click **Password Generator**.
   ![KeePass_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_2.png)
3. In the **Passphrase** tab, generate a sequence of 7 random words. Carefully
   write these words down on paper, as they will be used as the password for
   Persistent Storage.
   ![KeePass_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_3.png)

4. Return to the Persistent Storage window, enter the generated password, and
   click **Create Persistent Storage**.
   ![Persistent_Storage_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_2.png)

5. After creation, enable the **Electrum Bitcoin Wallet** option in the
   Persistent Storage settings. This will allow you to save wallet-related data
   between sessions.
   ![Persistent_Storage_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_3.png)

    <br />

   ![Persistent_Storage_4](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/PersistentStorage_4.png)

## Learning to Store Passwords in KeePassXC

<br />

<p align="center">
    <img src="https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/logo.png" alt="logo_keepass">
</p>

<br />

KeePassXC is an indispensable tool for anyone who wants to manage passwords
securely. It allows you to create encrypted databases where all your credentials
can be stored and protected by a master password and/or a key file.

### Step 1: Creating a New Database

1. Open KeePassXC and click **New Database**.
   ![KeePass_4](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_4.png)
2. Name the database and click **Continue**.
   ![KeePass_5](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_5.png)

### Step 2: Setting Up Security Measures

1. Increase the description time to 2.5 seconds to make brute-force attacks more
   difficult.
   ![KeePass_6](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_6.png)
2. Generate a strong password with at least 20 characters and save it in a
   secure location.
   ![KeePass_8](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_8.png)
3. Add a **Key File** as an extra layer of security. Save this file in
   Persistent Storage for greater protection.
   ![KeePass_9](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_9.png)
   ![KeePass_10](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_10.png)
   ![KeePass_11](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_11.png)

4. Save the database in Persistent Storage, preferably in the same folder as the
   Key File.
   ![KeePass_12](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_12.png)

### Step 3: Saving Passwords in KeePassXC

1. To add a new entry, click **Add Entry**.
   ![KeePass_14](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_14.png)
2. Enter the password details, such as title and the previously generated
   password.
   ![KeePass_15](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_15.png)
   ![KeePass_16](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_16.png)

## Creating a Secure Wallet with Electrum

Now that we have our environment set up, we can create a Bitcoin wallet using
Electrum. This lightweight client is known for its simplicity and security, and
it is also native to Tails, making it perfect as a first **wallet**.

### Step 1: Starting Electrum

1. In the **Applications** menu, go to **Internet** and select **Electrum
   Bitcoin Wallet**.
   ![Home_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Home_2.png)
2. Choose a name for your wallet and click **Next**.
   ![Wallet_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_1.png)

### Step 2: Generating a Secure Seed

1. Select **Standard Wallet** and click **Next**.
   ![Wallet_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_2.png)
2. Select **I already have a seed** and click **Next**.
   ![Wallet_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_3.png)
3. Click **Options**, enable **Extend this seed with custom words**, select
   **BIP39**, and click **Ok**.
   ![Wallet_4](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_4.png)
   ![Wallet_5](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_5.png)
4. Use KeePassXC to generate a **Passphrase** of 24 words. Add one additional
   custom word (of your choice) to total 25 words, increasing security.
   ![Wallet_6](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_6.png)
5. Set a password of your choice to access the wallet and don't forget to save
   this password in **KeePassXC** for secure backup.
   ![Wallet_7](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_7.png)
6. Save the **Master Public Key** and **Private Keys** in KeePassXC for secure
   backup.
   ![Wallet_9](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_9.png)
   ![Wallet_12](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Wallet_12.png)

## Transferring Passwords to Mobile Devices

To make it easier to access your passwords on the go, you can transfer the
KeePassXC database to a mobile device.

1. Install a KeePassXC-compatible app on your phone.
   ![Mobile_1](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Mobile_1.png)
2. Connect your phone to the computer via USB and transfer the database and Key
   File.
   ![KeePass_17](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/KeePass_17.png)
3. Open the app on your phone and connect to the database.
   ![Mobile_2](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Mobile_2.png)
4. After successful login, you will be able to access your passwords directly
   from your phone.
   ![Mobile_3](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/defi-for-beginners/foundations/getting-started/Mobile_3.png)

## Conclusion

With this guide, you have learned how to set up a secure environment to manage
your cryptocurrencies, from creating Persistent Storage in Tails to generating a
Bitcoin wallet with Electrum. We also explored how to use KeePassXC to securely
store passwords and private keys, ensuring your assets are protected against
external threats.

Remember: security is an ongoing process. Keep your tools up to date, always
access your **wallet** offline in Tails, use strong passwords, and never share
your private keys or passwords with anyone. With these practices, you will be
well prepared to navigate the world of cryptocurrencies with confidence.
