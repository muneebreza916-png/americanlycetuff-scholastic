import { spawn } from 'child_process';
import fs from 'fs';

function startTunnel() {
  console.log('Starting persistent SSH tunnel to http://localhost:3000...');
  const proc = spawn('ssh', [
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'ServerAliveInterval=30',
    '-o', 'ServerAliveCountMax=3',
    '-R', '80:127.0.0.1:3000',
    'nokey@localhost.run'
  ]);

  proc.stdout.on('data', (data) => {
    const text = data.toString();
    console.log(text);
    const match = text.match(/https:\/\/[a-zA-Z0-9.-]+\.lhr\.life/);
    if (match) {
      console.log('\n🌟 ACTIVE PUBLIC URL:', match[0]);
      fs.writeFileSync('PUBLIC_URL.txt', match[0]);
    }
  });

  proc.stderr.on('data', (data) => {
    const text = data.toString();
    console.error(text);
    const match = text.match(/https:\/\/[a-zA-Z0-9.-]+\.lhr\.life/);
    if (match) {
      console.log('\n🌟 ACTIVE PUBLIC URL:', match[0]);
      fs.writeFileSync('PUBLIC_URL.txt', match[0]);
    }
  });

  proc.on('close', (code) => {
    console.log(`SSH tunnel process exited with code ${code}. Reconnecting in 3s...`);
    setTimeout(startTunnel, 3000);
  });
}

startTunnel();
