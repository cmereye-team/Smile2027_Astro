import { execSync } from 'child_process';
import fs from 'fs';

const target = (process.argv[2] || '').toLowerCase();
const projectName = process.env.CF_PAGES_PROJECT || '2026smile';

const sysNodeDir = 'D:\\Program Files\\nodejs';
const cleanEnv = { ...process.env };
if (fs.existsSync(sysNodeDir) && process.env.PATH && !process.env.PATH.startsWith(sysNodeDir)) {
  cleanEnv.PATH = `${sysNodeDir};${process.env.PATH}`;
}
delete cleanEnv.ELECTRON_RUN_AS_NODE;

const sysNode = `${sysNodeDir}\\node.exe`;
const sysWrangler = `${sysNodeDir}\\Yarn\\yarn_global\\node_modules\\wrangler\\wrangler-dist\\cli.js`;

if (target === 'cf' || target === 'cloudflare') {
  console.log(`🚀 [Cloudflare Pages] 正在進行 Astro 構建與部署 (${projectName})...`);
  execSync('pnpm build', { stdio: 'inherit', env: cleanEnv });

  if (fs.existsSync(sysNode) && fs.existsSync(sysWrangler)) {
    execSync(`"${sysNode}" "${sysWrangler}" pages deploy dist --project-name ${projectName} --branch main --commit-dirty=true`, { stdio: 'inherit', env: cleanEnv });
  } else {
    execSync(`wrangler pages deploy dist --project-name ${projectName} --branch main --commit-dirty=true`, { stdio: 'inherit', env: cleanEnv });
  }
  console.log(`\n✨ [Cloudflare Pages] 部署成功！專案: ${projectName}`);
} else {
  console.log('💡 使用方法:');
  console.log(`  pnpm deploy:cf     # 一鍵構建並推送至 Cloudflare Pages (${projectName})`);
  console.log('  pnpm push:cf       # 同上');
}
