# iOS Clock clone mobile application.

This is an open-source repository sharing an overview of Expo router V2's navigation system by recreating the iOS clock application.

## Installation

First, clone this repository:

<!-- start:code block -->
# Clone this repository
git clone https://github.com/mfts/papermark.git
cd papermark

# Install dependencies
npm install

# Copy the example .env file
cp .env.example .env

# Initialize the database
npx prisma generate
npx prisma db push

# Run the app
npm run dev

# Open http://localhost:3000 in your browser
open http://localhost:3000
<!-- end:code block -->
