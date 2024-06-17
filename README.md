# User Details Fetcher

A React application that fetches and displays user details based on the user ID. It uses a custom hook `useFetchUser` to handle data fetching, implement caching, show loading states, handle errors, and allow manual refreshing of user details.

## Table of Contents

- Demo
- Features
- Installation
- Contributing

## Table of Contents
You can see a live demo of the application [here](https://meek-meringue-363162.netlify.app/).

## Features
- Fetch user details using a custom hook.
- Implement caching to avoid redundant API calls for the same user ID.
- Show loading state while fetching data.
- Handle and display errors if the API request fails.
- Allow the user details to be refreshed manually with a button click.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yusufobr/react-hook.git
    cd react-hook
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
    
3. Start the development server:
    ```sh
    npm run dev
    ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs, improvements, or new features.