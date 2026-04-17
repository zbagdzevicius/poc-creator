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

# --- Install GitHub CLI ---
if ! command -v gh &>/dev/null; then
  echo "Installing GitHub CLI..."
  if [ "$PLATFORM" = "macos" ]; then
    brew install gh
  elif [ "$PLATFORM" = "linux" ]; then
    if command -v apt-get &>/dev/null; then
      (type -p wget >/dev/null || sudo apt-get install wget -y) \
        && sudo mkdir -p -m 755 /etc/apt/keyrings \
        && out=$(mktemp) && wget -nv -O"$out" https://cli.github.com/packages/githubcli-archive-keyring.gpg \
        && cat "$out" | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
        && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
        && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
        && sudo apt-get update && sudo apt-get install gh -y
    elif command -v dnf &>/dev/null; then
      sudo dnf install -y gh
    elif command -v yum &>/dev/null; then
      sudo yum install -y gh
    else
      echo "Could not install GitHub CLI automatically. Install manually: https://cli.github.com/"
    fi
  fi
  if command -v gh &>/dev/null; then
    echo "GitHub CLI installed: $(gh --version | head -1)"
  fi
else
  echo "GitHub CLI found: $(gh --version | head -1)"
fi

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
