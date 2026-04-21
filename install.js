#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SKILL_NAME = 'topic-map-generator';
const REPO_OWNER = 'chloe-yang-jiali';
const REPO_NAME = 'geo-seo-skills';
const SOURCE_DIR = path.join(__dirname, 'topic-map-generator');
const TARGET_DIR = path.join(process.env.HOME || process.env.USERPROFILE, '.claude', 'skills', SKILL_NAME);

// Get latest tag
function getLatestTag() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
    const response = execSync(`curl -s "${apiUrl}"`, { encoding: 'utf8' });
    const data = JSON.parse(response);
    return data.tag_name;
  } catch {
    return 'main';
  }
}

// Download from GitHub via jsDelivr CDN (no auth required)
function downloadFromGitHub() {
  console.log('📡 Downloading from GitHub (via jsDelivr CDN)...\n');

  const tag = getLatestTag();
  const baseUrl = `https://cdn.jsdelivr.net/gh/${REPO_OWNER}/${REPO_NAME}@${tag}/topic-map-generator`;

  const files = ['SKILL.md'];

  // Check if there are additional files
  try {
    const listUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/topic-map-generator?ref=${tag}`;
    const response = execSync(`curl -s "${listUrl}"`, { encoding: 'utf8' });
    const data = JSON.parse(response);
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (item.type === 'file' && item.name !== 'SKILL.md') {
          files.push(item.name);
        }
      });
    }
  } catch {
    // Use default files list
  }

  // Download each file
  files.forEach(file => {
    const url = `${baseUrl}/${file}`;
    const dest = path.join(TARGET_DIR, file);
    console.log(`Downloading ${file}...`);
    execSync(`curl -sL "${url}" -o "${dest}"`, { stdio: 'inherit' });
  });

  console.log('✅ Downloaded skill files from GitHub\n');
}

try {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
    console.log(`✅ Created directory: ${TARGET_DIR}`);
  }

  // Download from GitHub (no auth required)
  downloadFromGitHub();

  console.log(`\n✨ Successfully installed ${SKILL_NAME} Skill!\n`);
  console.log('The skill is now available in Claude Code.\n');
  console.log('You can start using it by saying:');
  console.log(`  "为 [品牌名称] 生成 Topic Map"\n`);

} catch (error) {
  console.error('\n❌ Installation failed:', error.message, '\n');
  process.exit(1);
}
