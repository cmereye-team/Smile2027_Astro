import { execSync } from 'child_process';

const target = (process.argv[2] || '').toLowerCase();

const cleanEnv = { ...process.env };
if (process.env.PATH && !process.env.PATH.startsWith('D:\\Program Files\\nodejs')) {
  cleanEnv.PATH = `D:\\Program Files\\nodejs;${process.env.PATH}`;
}
delete cleanEnv.ELECTRON_RUN_AS_NODE;

if (target === 'cf' || target === 'cloudflare') {
  console.log('🚀 [Cloudflare Pages] 正在進行 Astro 構建與部署 (2026smile)...');
  execSync('pnpm build', { stdio: 'inherit', env: cleanEnv });
  execSync('wrangler pages deploy dist --project-name 2026smile --branch main --commit-dirty=true', { stdio: 'inherit', env: cleanEnv });
  console.log('\n✨ [Cloudflare Pages] 部署成功！線上地址: https://2026smile.pages.dev');
} else {
  console.log('💡 使用方法:');
  console.log('  pnpm deploy:cf     # 一鍵構建並推送至 Cloudflare Pages (2026smile)');
  console.log('  pnpm push:cf       # 同上');
}
