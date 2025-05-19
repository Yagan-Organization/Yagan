![Yagan Banner.png](images/Yagan%20Banner.png)

[![App Build](https://github.com/homogenic1000/Yagan/actions/workflows/launch_app_test.yml/badge.svg)](https://github.com/homogenic1000/Yagan/actions/workflows/launch_app_test.yml)

## What is Yagan?

Yagan is a mobile app (currently in development) designed to help users of the Swiss public rail system make their travel easier and less expensive. With a simple and intuitive interface, Yagan allows users to report incidents on trains, such as out-of-service toilets, crowd density, or the presence of ticket inspector..

## Why Yagan?

Yagan is not only an artistic project; it also serves as a political statement. Through Yagan, we express our disagreement with the Swiss government’s decision to reduce or deny subsidies to the Swiss Federal Railways (CFF).

In a time when sustainable public transport is more crucial than ever, the government’s lack of support sends a troubling message about its priorities. Public transportation is a key element in building a greener and more socially just future. By failing to invest adequately in CFF, the government risks undermining accessibility, environmental efforts, and social cohesion.



## Key Features
- **Trip Search:** Users can search for train trips by entering their departure and arrival points.
- **Reporting:** Users can report specific incidents on the trains (e.g., out-of-service toilets, ticket checks, etc.).
- **My Trips:** Users can save their trips and receive alerts for new reports on their routes.
- **Notifications:** Get real-time alerts for reported incidents on the trains you’re traveling on.
- **Community Support:** The app relies on a community-based reporting system where users contribute to the shared information.

## API Used
- **OpenTransport Data.ch:** To get real-time information about Swiss trains.

## Technologies Used
- **React Native:** For mobile app development.

## Yagan's future technologies
- **PostgreSQL:** For managing the database.



## Installation

### Prerequisites

Before installing Yagan, ensure you have the following tools installed on your machine:
- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **React Native CLI**
- **PostgreSQL** for the database

### Installing the Project

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/yagan.git
   ```

2. Install the project dependencies:
   ```bash
   cd yagan
   npm install
   ```

3. Configure your PostgreSQL database by following the instructions in the `config/database.js` file.

4. Start the app in development mode:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! If you’d like to help improve Yagan, please follow these steps:

1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/feature-name
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -am 'Add a new feature'
   ```
5. Push your changes:
   ```bash
   git push origin feature/feature-name
   ```
6. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
