$webClient = New-Object System.Net.WebClient

# Download Sharp Floors TX screenshot
Write-Host "Downloading Sharp Floors TX image..."
try {
    $webClient.DownloadFile("https://www.sharpfloorstx.com/wp-content/uploads/2023/10/home-hero-bg.jpg", "$PSScriptRoot\public\sharp-floors-tx.jpg")
    Write-Host "Sharp Floors TX image downloaded successfully!"
} catch {
    Write-Host "Could not download Sharp Floors TX image. Using placeholder."
}

Write-Host "Done!"
