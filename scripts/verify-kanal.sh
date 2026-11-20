#!/bin/bash
# Verifikasi domain .go.id yang tidak merespons curl dari sandbox (blokir WAF/geo)
# Jalur kedua: web_search — domain resmi harus muncul di hasil pencarian.
declare -A Q=(
  [ahu.go.id]="situs resmi AHU Online Kemenkumham ahu.go.id"
  [kemenkumham.go.id]="situs resmi Kementerian Hukum kemenkumham.go.id"
  [halal.go.id]="situs resmi BPJPH sertifikasi halal halal.go.id"
  [bpom.go.id]="situs resmi BPOM bpom.go.id"
  [bsn.go.id]="situs resmi Badan Standardisasi Nasional bsn.go.id"
  [kemenkes.go.id]="situs resmi Kementerian Kesehatan kemenkes.go.id"
  [kemenag.go.id]="situs resmi Kementerian Agama kemenag.go.id"
  [kemenparekraf.go.id]="situs resmi Kementerian Pariwisata kemenparekraf.go.id"
  [menlhk.go.id]="situs resmi KLHK menlhk.go.id"
  [kemenperin.go.id]="situs resmi Kementerian Perindustrian kemenperin.go.id"
  [lpjk.org]="situs resmi LPJK lpjk.org"
  [kemendag.go.id]="situs resmi Kementerian Perdagangan kemendag.go.id"
  [ekonomi.go.id]="situs resmi Kemenko Perekonomian ekonomi.go.id"
)
for d in "${!Q[@]}"; do
  OUT=$(z-ai function -n web_search -a "{\"query\": \"${Q[$d]}\", \"num\": 3}" 2>/dev/null)
  HIT=$(echo "$OUT" | python3 -c "
import json,sys
raw=sys.stdin.read()
s=raw.find('['); e=raw.rfind(']')
try:
    data=json.loads(raw[s:e+1])
    host=[r.get('host_name','') for r in data]
    print('HIT' if any('$d' in h for h in host) else 'MISS')
except Exception:
    print('ERR')
")
  echo "$d => $HIT"
done
