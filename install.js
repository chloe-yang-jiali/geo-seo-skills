#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKILL_NAME = 'topic-map-generator';
const SOURCE_DIR = path.join(__dirname, 'topic-map-generator');
const TARGET_DIR = path.join(process.env.HOME || process.env.USERPROFILE, '.claude', 'skills', SKILL_NAME);

console.log(`\n📦 Installing ${SKILL_NAME} Skill for Claude Code...\n`);

try {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
    console.log(`✅ Created directory: ${TARGET_DIR}`);
  }

  // Copy SKILL.md
  const sourceFile = path.join(SOURCE_DIR, 'SKILL.md');
  const targetFile = path.join(TARGET_DIR, 'SKILL.md');

  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✅ Installed SKILL.md to: ${targetFile}`);
  } else {
    throw new Error(`SKILL.md not found at: ${sourceFile}`);
  }

  // Copy any additional files if they exist
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
