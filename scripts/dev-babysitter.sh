#!/bin/bash
# Babysitter dev server Next.js (port 3000).
# Tujuan: menjaga preview pengguna tetap hidup — jika server mati (OOM/apa pun),
# nyalakan ulang otomatis. Aman terhadap double-start (cek port dulu).
LOG=/home/z/my-project/.zscripts/babysitter.log
cd /home/z/my-project || exit 1
echo "[$(date '+%F %T')] babysitter start (pid $$)" >> "$LOG"
while true; do
  if ! ss -tln 2>/dev/null | grep -q ":3000 "; then
    echo "[$(date '+%F %T')] port 3000 tidak hidup -> start dev server" >> "$LOG"
    bun run dev
    echo "[$(date '+%F %T')] dev server keluar rc=$?" >> "$LOG"
    sleep 3
  fi
  sleep 5
done
