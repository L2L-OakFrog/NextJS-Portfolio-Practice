const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const versionHistoryPath = path.join(process.cwd(), 'data/version-history.json');
const nextConfigPath = path.join(process.cwd(), 'next.config.mjs');

// Get the last commit message
function getCommitMessage() {
  try {
    return execSync('git log -1 --pretty=%B').toString().trim();
  } catch (e) {
    return 'Initial commit';
  }
}

// Read and update version history
function updateVersionHistory() {
  // Get current version from next.config.mjs
  const nextConfig = require(nextConfigPath);
  const version = nextConfig.env.NEXT_PUBLIC_BUILD_VERSION;
  
  // Parse current date
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0];
  
  // Get commit message
  const commit = getCommitMessage();
  
  // Read existing data
  let history = { versions: [] };
  if (fs.existsSync(versionHistoryPath)) {
    history = JSON.parse(fs.readFileSync(versionHistoryPath, 'utf8'));
  }
  
  // Add new entry
  history.versions.unshift({
    version,
    date,
    time,
    commit,
    changes: [commit] // Using commit message as initial change
  });
  
  // Write back to file
  fs.writeFileSync(versionHistoryPath, JSON.stringify(history, null, 2));
  console.log(`Updated version history with ${version}`);
}

updateVersionHistory();