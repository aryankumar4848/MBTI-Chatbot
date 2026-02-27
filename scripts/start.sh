#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

docker compose up -d --build

echo "Waiting for ML readiness..."
for _ in {1..40}; do
  if curl -fsS http://localhost:5001/ready >/dev/null 2>&1; then
    echo "ML ready."
    break
  fi
  sleep 2
done

echo "Waiting for server readiness..."
for _ in {1..20}; do
  if curl -fsS http://localhost:5000/ready >/dev/null 2>&1; then
    echo "Server ready."
    break
  fi
  sleep 2
done

echo "App URL: http://localhost:3000"
docker compose ps
