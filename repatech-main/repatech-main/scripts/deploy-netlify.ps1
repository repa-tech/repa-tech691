$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "Cleaning previous build output..."
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

Write-Host "Building Next.js..."
npm run build

Write-Host "Deploying to Netlify production..."
npx --yes netlify-cli deploy --prod --build

if ($LASTEXITCODE -ne 0) {
  Write-Error "Netlify deploy failed."
}

Write-Host "Done: https://guileless-pastelito-d6a153.netlify.app"
