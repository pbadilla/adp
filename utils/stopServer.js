
const { execSync } = require('child_process');

try {
  // Find and kill the process running the server
  const serverProcessId = execSync('lsof -t -i:3000', { encoding: 'utf-8' }).trim();
  execSync(`kill -9 ${serverProcessId}`);
  console.log('Server stopped successfully.');
} catch (error) {
  console.error('Error stopping the server:', error.message);
}
