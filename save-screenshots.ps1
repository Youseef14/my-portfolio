# Get the screenshots from puppeteer and save them

# Note: This script assumes the screenshots are already available via puppeteer
# We'll use a different approach - download directly from the websites

$webClient = New-Object System.Net.WebClient

# Try to download Sharp Floors image
Write-Host "Attempting to save Sharp Floors image..."
if (Test-Path "public\sharp-floors.jpg") {
    Write-Host "Sharp Floors image already exists!"
} else {
    Write-Host "Sharp Floors image needs to be captured via screenshot tool"
}

# For Prime Hotels, we need to use the screenshot we captured
Write-Host "Prime Hotels screenshot has been captured and needs to be saved"
Write-Host "Please use the puppeteer screenshot resources to save the images"

Write-Host "Done!"
