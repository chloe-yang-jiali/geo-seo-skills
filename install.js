#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const SKILL_NAME = 'topic-map-generator';
const REPO_OWNER = 'chloe-yang-jiali';
const REPO_NAME = 'geo-seo-skills';
const SOURCE_DIR = path.join(__dirname, 'topic-map-generator');
const TARGET_DIR = path.join(process.env.HOME || process.env.USERPROFILE, '.claude', 'skills', SKILL_NAME);

console.log(`\n📦 Installing ${SKILL_NAME} Skill for Claude Code...\n`);

// Get latest release download URL
function getLatestReleaseUrl() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
    const response = execSync(`curl -s "${apiUrl}"`, { encoding: 'utf8' });
    const data = JSON.parse(response);
    const zipAsset = data.assets?.find(asset => asset.name === 'topic-map-generator.zip');
    return zipAsset?.browser_download_url;
  } catch {
    return null;
  }
}

// Download and extract from GitHub Releases
function downloadFromReleases() {
  console.log('📡 Downloading from GitHub Releases...\n');

  const downloadUrl = getLatestReleaseUrl();
  if (!downloadUrl) {
    throw new Error('Could not find latest release. Please check if the tag exists.');
  }

  const zipPath = path.join(TARGET_DIR, 'topic-map-generator.zip');
  const extractDir = path.join(TARGET_DIR, 'extracted');

  // Download
  execSync(`curl -sL "${downloadUrl}" -o "${zipPath}"`, { stdio: 'inherit' });
  console.log('✅ Downloaded release package\n');

  // Extract
  fs.mkdirSync(extractDir, { recursive: true });
  execSync(`unzip -o "${zipPath}" -d "${extractDir}"`, { stdio: 'inherit' });

  // Move files out of extracted folder
  const extractedSkillDir = path.join(extractDir, 'topic-map-generator');
  if (fs.existsSync(extractedSkillDir)) {
    fs.readdirSync(extractedSkillDir).forEach(file => {
      fs.copyFileSync(path.join(extractedSkillDir, file), path.join(TARGET_DIR, file));
    });
  }

  // Cleanup
  fs.rmSync(zipPath, { force: true });
  fs.rmSync(extractDir, { recursive: true, force: true });

  console.log('✅ Extracted skill files\n');
}

try {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
    console.log(`✅ Created directory: ${TARGET_DIR}`);
  }

  // Try downloading from GitHub Releases first
  try {
    downloadFromReleases();
  } catch (err) {
    console.log('⚠️ Could not download from GitHub Releases, using local files...\n');

    // Fallback to local files
    const sourceFile = path.join(SOURCE_DIR, 'SKILL.md');
    const targetFile = path.join(TARGET_DIR, 'SKILL.md');

    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`✅ Installed SKILL.md to: ${targetFile}`);
    } else {
      throw new Error(`SKILL.md not found at: ${sourceFile}`);
    }

    // Copy any additional files if they exist
    if (fs.existsSync(SOURCE_DIR)) {
      const files = fs.readdirSync(SOURCE_DIR);
      files.forEach(file => {
        if (file !== 'SKILL.md' && !file.startsWith('.')) {
          const src = path.join(SOURCE_DIR, file);
          const dest = path.join(TARGET_DIR, file);
          const stat = fs.statSync(src);
          if (stat.isFile()) {
            fs.copyFileSync(src, dest);
            console.log(`✅ Copied ${file} to: ${dest}`);
          } else if (stat.isDirectory()) {
            copyDirSync(src, dest);
            console.log(`✅ Copied directory ${file}/ to: ${dest}`);
          }
        }
      });
    }
  }

  console.log(`\n✨ Successfully installed ${SKILL_NAME} Skill!\n`);
  console.log('The skill is now available in Claude Code.\n');
  console.log('You can start using it by saying:');
  console.log(`  "为 [品牌名称] 生成 Topic Map"\n`);

} catch (error) {
  console.error('\n❌ Installation failed:', error.message, '\n');
  process.exit(1);
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
