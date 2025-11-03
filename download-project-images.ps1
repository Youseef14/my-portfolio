$webClient = New-Object System.Net.WebClient

# Download Sharp Floors image
Write-Host "Downloading Sharp Floors image..."
try {
    $webClient.DownloadFile("https://www.sharpfloorstx.com/wp-content/uploads/2023/10/home-hero-bg.jpg", "$PSScriptRoot\public\sharp-floors.jpg")
    Write-Host "Sharp Floors image downloaded successfully!"
} catch {
    Write-Host "Error downloading Sharp Floors image: $_"
}

# Download Prime Hotels image
Write-Host "Downloading Prime Hotels image..."
try {
    $webClient.DownloadFile("https://cdn.sanity.io/images/vqfber6q/production/80c90f8b6e04b0aecadd0d7f3c02eecf41a6bf89-1920x1080.jpg", "$PSScriptRoot\public\prime-hotels.jpg")
    Write-Host "Prime Hotels image downloaded successfully!"
} catch {
    Write-Host "Error downloading Prime Hotels image: $_"
}

Write-Host "Done!"
