# FridgeFriend

FridgeFriend is a Progressive Web App designed to connect individuals and communities with local fridges and pantries. The app provides a platform for users to locate, manage, and communicate with fridges and pantries in their area, as well as contribute to and engage with their local community. The Twilio API is integrated to facilitate real-time communication between users and pantry organizers.

## Description

The main features of FridgeFriend include:

- Interactive map for locating nearby fridges and pantries
- Real-time inventory management
- SMS notifications and alerts using the Twilio API
- Support Ticketing System

## Muy Importante!!!
Next.js uses the .env.local file to store environment variables, but the Prisma ORM cannot read from that file, so you must use the dotenv-cli to run Prisma cli commands.

Prefix every Prisma cli command with ```dotenv -e .env.local -- ```

For example, in order to generate the Prisma client, which would normally be ```npx prisma generate```, you would instead run the following command:

```bash
dotenv -e .env.local -- npx prisma generate
```

I have added some scripts to the package.json for some of the most common commands to make this easier. In this case, you can simply run ```npm run generate``` to generate the client

## Getting Started

To get started with FridgeFriend, follow these steps:

1. Clone the repository to your local machine:
https://github.com/The-Merge-Sorts/FridgeFriend.git

2. Change to the project directory:
```cd FridgeFriend```

3. Run the commands
   ```
   npm i
   npm run dev
   ```

## Technologies

### Client
- Next.js
- React
- Mapbox
- Auth0
- React Hook Form
- Tailwind CSS

### Contribution

[Join The Discord Server <img align='center' src='https://clipartcraft.com/images/discord-logo-transparent-better.png' width='30px'>](https://discord.gg/7hdFGaYB)