$webClient = New-Object System.Net.WebClient

# Download Prime Hotels screenshot
Write-Host "Downloading Prime Hotels Group image..."
try {
    $webClient.DownloadFile("https://primehotelsgroup.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fvqfber6q%2Fproduction%2F80c90f8b6e04b0aecadd0d7f3c02eecf41a6bf89-1920x1080.jpg%3Fw%3D1920%26h%3D1080%26auto%3Dformat&w=1920&q=75", "$PSScriptRoot\public\prime-hotels-group.jpg")
    Write-Host "Prime Hotels Group image downloaded successfully!"
} catch {
    Write-Host "Error: $_"
    Write-Host "Could not download Prime Hotels image."
}

Write-Host "Done!"
