# Start Local MongoDB with Project-Local Data
# This script attempts to automatically detect Tailscale IP and bind to it.

$ErrorActionPreference = "Stop"

# --- Configuration ---
# Look for MongoDB in standard locations
$possibleMongoPaths = @(
    "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"
)

$mongoBin = $null
foreach ($path in $possibleMongoPaths) {
    if (Test-Path $path) {
        $mongoBin = $path
        break
    }
}

# Start data path relative to script location
$dbPath = Join-Path $PSScriptRoot "backend\database" 

# --- Ensure Data Directory Exists ---
if (!(Test-Path -Path $dbPath)) {
    Write-Host "Creating database directory at: $dbPath" -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $dbPath | Out-Null
} else {
    Write-Host "Database directory found at: $dbPath" -ForegroundColor Green
}

# --- Detect Tailscale IP ---
$bindIps = "127.0.0.1"
$tailscaleIp = $null

try {
    # Try getting IP from tailscale CLI
    if (Get-Command "tailscale" -ErrorAction SilentlyContinue) {
        $tailscaleIp = (tailscale ip -4).Trim()
    } 
    # Fallback: check environment variable if set manually
    elseif ($env:TAILSCALE_IP) {
        $tailscaleIp = $env:TAILSCALE_IP
    }
} catch {
    Write-Warning "Could not detect Tailscale IP automatically."
}

if ($tailscaleIp -match "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$") {
    Write-Host "Detected Tailscale IP: $tailscaleIp" -ForegroundColor Cyan
    $bindIps = "$bindIps,$tailscaleIp"
} else {
    Write-Host "Tailscale IP not detected or invalid. Database will be local-only." -ForegroundColor Yellow
}

# --- Start MongoDB ---
if ($mongoBin) {
    Write-Host "Starting MongoDB..." -ForegroundColor Green
    Write-Host "  Database Path: $dbPath"
    Write-Host "  Binding IPs:   $bindIps"
    Write-Host "  Port:          27017"
    Write-Host "`nPress Ctrl+C to stop the server.`n"
    
    & $mongoBin --dbpath $dbPath --bind_ip $bindIps
} else {
    Write-Error "MongoDB executable not found in standard locations."
    Write-Host "Please check your MongoDB installation." -ForegroundColor Red
}
