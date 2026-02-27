#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

docker compose ps
echo
echo "ML health:"
curl -s http://localhost:5001/health || true
echo
echo "Server readiness:"
curl -s http://localhost:5000/ready || true
echo
