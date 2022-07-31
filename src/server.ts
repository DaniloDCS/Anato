import App from './App';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});