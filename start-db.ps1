# Start Local MongoDB with Project-Local Data
$mongoPath = "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
$dbPath = "$PSScriptRoot\backend\database"

# Create db directory if it doesn't exist (just in case)
if (!(Test-Path -Path $dbPath)) {
    New-Item -ItemType Directory -Force -Path $dbPath
}

if (Test-Path -Path $mongoPath) {
    Write-Host "Starting MongoDB with dbpath: $dbPath"
    & $mongoPath --dbpath $dbPath
} else {
    Write-Host "MongoDB not found at default location: $mongoPath"
    Write-Host "Please edit this script to point to your mongod.exe"
    # Try looking in other versions if 7.0 not found? 
    # For now, let's stick to a simple check.
}
