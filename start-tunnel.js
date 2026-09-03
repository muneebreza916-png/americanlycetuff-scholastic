import localtunnel from 'localtunnel';
import fs from 'fs';

async function main() {
  try {
    console.log('Establishing public tunnel to http://localhost:3000...');
    const tunnel = await localtunnel({
      port: 3000,
      subdomain: 'als-campus-lahore-' + Math.floor(1000 + Math.random() * 9000),
    });

    console.log('\n======================================================');
    console.log('🚀 PUBLIC SHAREABLE PREVIEW URL:');
    console.log(tunnel.url);
    console.log('======================================================\n');

    fs.writeFileSync('PUBLIC_URL.txt', tunnel.url);

    tunnel.on('close', () => {
      console.log('Tunnel closed. Reconnecting in 3s...');
      setTimeout(main, 3000);
    });

    tunnel.on('error', (err) => {
      console.error('Tunnel error:', err);
    });
  } catch (err) {
    console.error('Failed to establish tunnel:', err);
    setTimeout(main, 5000);
  }
}

main();
