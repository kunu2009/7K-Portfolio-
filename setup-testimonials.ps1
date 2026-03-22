# Create testimonials directory structure
$basePath = "C:\Desktop\portfolio\src\app\testimonials"
$submitPath = "$basePath\submit"

# Create directories
New-Item -ItemType Directory -Path $basePath -Force | Out-Null
New-Item -ItemType Directory -Path $submitPath -Force | Out-Null

Write-Host "✅ Created testimonials directories"
