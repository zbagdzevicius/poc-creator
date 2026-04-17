# POC Creator — Windows Environment Setup
# Run: powershell -ExecutionPolicy Bypass -File setup.ps1

$ErrorActionPreference = "Stop"

Write-Host "=== POC Creator — Environment Setup ===" -ForegroundColor Cyan
Write-Host ""

# --- Install Node.js ---
$nodeInstalled = $false
try {
    $nodeVersion = node --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Node.js found: $nodeVersion" -ForegroundColor Green
        $nodeInstalled = $true
    }
} catch {
    $nodeInstalled = $false
}

if (-not $nodeInstalled) {
    Write-Host "Installing Node.js LTS..."

    # Try winget first
    $wingetAvailable = $false
    try {
        winget --version 2>$null | Out-Null
        if ($LASTEXITCODE -eq 0) { $wingetAvailable = $true }
    } catch {
        $wingetAvailable = $false
    }

    if ($wingetAvailable) {
        Write-Host "Using winget to install Node.js..."
        winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements --silent
    } else {
        # Fallback: download installer directly
        Write-Host "winget not available. Downloading Node.js installer..."
        $nodeUrl = "https://nodejs.org/dist/v22.15.0/node-v22.15.0-x64.msi"
        $installerPath = "$env:TEMP\node-installer.msi"
        Invoke-WebRequest -Uri $nodeUrl -OutFile $installerPath -UseBasicParsing
        Start-Process msiexec.exe -ArgumentList "/i", $installerPath, "/qn", "/norestart" -Wait
        Remove-Item $installerPath -Force
    }

    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

    Write-Host "Node.js installed: $(node --version)" -ForegroundColor Green
}

# --- Verify npm ---
try {
    $npmVersion = npm --version
    Write-Host "npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm not found. Please restart your terminal and try again." -ForegroundColor Red
    exit 1
}

# --- Install GitHub CLI ---
$ghInstalled = $false
try {
    gh --version 2>$null | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "GitHub CLI found." -ForegroundColor Green
        $ghInstalled = $true
    }
} catch {
    $ghInstalled = $false
}

if (-not $ghInstalled) {
    Write-Host "Installing GitHub CLI..."
    if ($wingetAvailable) {
        winget install GitHub.cli --accept-source-agreements --accept-package-agreements --silent
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    } else {
        Write-Host "Could not install GitHub CLI automatically. Install manually: https://cli.github.com/" -ForegroundColor Yellow
    }
}

# --- Install project dependencies ---
Write-Host ""
Write-Host "Installing project dependencies..."
npm install

Write-Host ""
Write-Host "=== Setup Complete ===" -ForegroundColor Cyan
Write-Host "Node.js: $(node --version)"
Write-Host "npm:     $(npm --version)"
Write-Host ""
Write-Host "Ready! Open this project in Claude Code and say:" -ForegroundColor Green
Write-Host "  'run full pipeline'   - to execute all phases"
Write-Host "  'analyze PRDs'        - to start with Phase 1"
Write-Host ""
