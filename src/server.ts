import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 5000;

const connectToDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('❌ Unable to connect to the database:', error.message);
      process.exit(1);
    } else {
      console.error('❌ An unknown error occurred:', error);
      process.exit(1);
    }
  }
};

const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();

    await sequelize.sync();
    console.log('✅ Database models synchronized');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('❌ Failed to start server:', error.message);
    } else {
      console.error('❌ An unknown error occurred:', error);
    }
  }
};

startServer();
