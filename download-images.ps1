# PowerShell script to download external images for Simba Cement site
# This prevents Google Ads from flagging external image resources

Write-Host "Downloading external images..." -ForegroundColor Green

# Create assets directory if it doesn't exist
$assetsDir = "src/assets"
if (!(Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force
    Write-Host "Created assets directory" -ForegroundColor Yellow
}

# Define external images to download
$images = @(
    @{
        Url = "https://simbacementkenya.com/wp-content/uploads/2024/06/SIMBA-CEMENT-3-e1645000022245-1024x681-1.png"
        LocalPath = "src/assets/simba-cement-32.5r.png"
        Description = "Simba Cement 32.5R product image"
    },
    @{
        Url = "https://simbacementkenya.com/wp-content/uploads/2024/06/42.5-Banner.png"
        LocalPath = "src/assets/simba-power-42.5n.png"
        Description = "Simba Power 42.5N product image"
    },
    @{
        Url = "https://simbacementkenya.com/wp-content/uploads/2023/08/kenyabuilders_140198317_430163928038842_5264934779918920869_n-400x400.jpg"
        LocalPath = "src/assets/paving-blocks-60mm.jpg"
        Description = "Paving blocks 60mm product image"
    },
    @{
        Url = "https://www.independent.co.ug/wp-content/uploads/2022/06/Simba-cement-factory.jpg"
        LocalPath = "src/assets/simba-cement-factory.jpg"
        Description = "Simba cement factory background image"
    },
    @{
        Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYqIk-aI20ogH5_1yih27tl0-gT1oieXdcQ&s"
        LocalPath = "src/assets/simba-cement-logo.png"
        Description = "Simba Cement logo"
    },
    @{
        Url = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584845.jpg"
        LocalPath = "src/assets/whatsapp-icon.png"
        Description = "WhatsApp icon for floating button"
    }
)

# Download each image
$downloadCount = 0
$errorCount = 0

foreach ($image in $images) {
    try {
        Write-Host "Downloading: $($image.Description)" -ForegroundColor Cyan
        Write-Host "  From: $($image.Url)" -ForegroundColor Gray
        Write-Host "  To: $($image.LocalPath)" -ForegroundColor Gray
        
        # Download with progress bar
        Invoke-WebRequest -Uri $image.Url -OutFile $image.LocalPath -UseBasicParsing
        
        # Verify file was downloaded
        if (Test-Path $image.LocalPath) {
            $fileSize = (Get-Item $image.LocalPath).Length
            Write-Host "  ✓ Downloaded successfully ($([math]::Round($fileSize/1KB, 2)) KB)" -ForegroundColor Green
            $downloadCount++
        } else {
            Write-Host "  ✗ Download failed - file not found" -ForegroundColor Red
            $errorCount++
        }
    }
    catch {
        Write-Host "  ✗ Download failed: $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
    
    Write-Host ""
}

# Summary
Write-Host "Download Summary:" -ForegroundColor Yellow
Write-Host "  Successfully downloaded: $downloadCount images" -ForegroundColor Green
if ($errorCount -gt 0) {
    Write-Host "  Failed downloads: $errorCount images" -ForegroundColor Red
} else {
    Write-Host "  All images downloaded successfully!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update image references in your React components to use local paths" -ForegroundColor White
Write-Host "2. Import images in components using: import imageName from '@/assets/filename.ext'" -ForegroundColor White
Write-Host "3. Replace external URLs with imported image variables" -ForegroundColor White

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Green
