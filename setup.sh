#!/usr/bin/env bash
set -euo pipefail

echo "=== POC Creator — Environment Setup ==="
echo ""

# Detect OS
OS="$(uname -s)"
case "$OS" in
  Darwin) PLATFORM="macos" ;;
  Linux)  PLATFORM="linux" ;;
  *)      echo "Unsupported OS: $OS"; exit 1 ;;
esac

echo "Platform: $PLATFORM"

# --- Install Homebrew (macOS only) ---
if [ "$PLATFORM" = "macos" ]; then
  if ! command -v brew &>/dev/null; then
    echo "Installing Homebrew..."
    NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    # Add Homebrew to PATH for Apple Silicon
    if [ -f /opt/homebrew/bin/brew ]; then
      eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    echo "Homebrew installed."
  else
    echo "Homebrew found."
  fi
fi

# --- Install Node.js ---
if ! command -v node &>/dev/null; then
  echo "Installing Node.js LTS..."
  if [ "$PLATFORM" = "macos" ]; then
    brew install node
  elif [ "$PLATFORM" = "linux" ]; then
    # Use NodeSource LTS setup
    if command -v apt-get &>/dev/null; then
      curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
      sudo apt-get install -y nodejs
    elif command -v dnf &>/dev/null; then
      curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
      sudo dnf install -y nodejs
    elif command -v yum &>/dev/null; then
      curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
      sudo yum install -y nodejs
    else
      echo "Could not detect package manager. Please install Node.js manually."
      exit 1
    fi
  fi
  echo "Node.js installed: $(node --version)"
else
  echo "Node.js found: $(node --version)"
fi

# --- Verify npm ---
if ! command -v npm &>/dev/null; then
  echo "npm not found. Please install npm manually."
  exit 1
fi
echo "npm found: $(npm --version)"

# --- Install project dependencies ---
echo ""
echo "Installing project dependencies..."
npm install

echo ""
echo "=== Setup Complete ==="
echo "Node.js: $(node --version)"
echo "npm:     $(npm --version)"
echo ""
echo "Ready! Open this project in Claude Code and say:"
echo "  'run full pipeline'   — to execute all phases"
echo "  'analyze PRDs'        — to start with Phase 1"
echo ""
