# replace_2026_to_2026.ps1
param(
    [string]$Root = (Get-Location).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$skipDirs = @(".git","node_modules",".next","dist","build","out")

function Should-SkipPath([string]$FullName) {
    foreach ($d in $skipDirs) {
        if ($FullName -like "*\$d\*" -or $FullName -like "*\$d") { return $true }
    }
    return $false
}

function Test-IsLikelyTextFile([string]$Path) {
    try {
        $bytes = [System.IO.File]::ReadAllBytes($Path)
        if ($bytes.Length -eq 0) { return $true }
        if ($bytes -contains 0) { return $false }
        $nonPrintable = 0
        foreach ($b in $bytes) {
            if (($b -lt 9) -or (($b -gt 13) -and ($b -lt 32))) { $nonPrintable++ }
        }
        return (($nonPrintable / [double]$bytes.Length) -lt 0.02)
    } catch { return $false }
}

Write-Host "Root: $Root"

$scannedFiles = 0
$changedFiles = 0
$renamedFiles = 0
$renamedDirs  = 0
$skippedRenamesBecauseTargetExists = 0

# 1) Replace inside file contents (FILES ONLY)
Get-ChildItem -LiteralPath $Root -Recurse -File -Force | ForEach-Object {
    if (Should-SkipPath $_.FullName) { return }

    $scannedFiles++

    if (-not (Test-IsLikelyTextFile $_.FullName)) { return }

    $text = Get-Content -LiteralPath $_.FullName -Raw
    if ($text -notmatch "2026") { return }

    $newText = $text -replace "2026","2026"
    if ($newText -ne $text) {
        Set-Content -LiteralPath $_.FullName -Value $newText -NoNewline
        $changedFiles++
        Write-Host "Content updated: $($_.FullName)"
    }
}

# 2) Rename files (deepest first)
Get-ChildItem -LiteralPath $Root -Recurse -File -Force |
Where-Object { -not (Should-SkipPath $_.FullName) -and $_.Name -like "*2026*" } |
Sort-Object -Property FullName -Descending |
ForEach-Object {
    $item   = $_
    $newName = $item.Name -replace "2026","2026"
    $parent  = Split-Path -LiteralPath $item.FullName -Parent
    $target  = Join-Path -Path $parent -ChildPath $newName

    if (Test-Path -LiteralPath $target) {
        $skippedRenamesBecauseTargetExists++
        Write-Warning "Skip file rename, target exists: $($item.FullName) -> $target"
        return
    }

    Rename-Item -LiteralPath $item.FullName -NewName $newName
    $renamedFiles++
    Write-Host "File renamed: $($item.FullName) -> $target"
}

# 3) Rename folders (deepest first)
Get-ChildItem -LiteralPath $Root -Recurse -Directory -Force |
Where-Object { -not (Should-SkipPath $_.FullName) -and $_.Name -like "*2026*" } |
Sort-Object -Property FullName -Descending |
ForEach-Object {
    $item   = $_
    $newName = $item.Name -replace "2026","2026"
    $parent  = Split-Path -LiteralPath $item.FullName -Parent
    $target  = Join-Path -Path $parent -ChildPath $newName

    if (Test-Path -LiteralPath $target) {
        $skippedRenamesBecauseTargetExists++
        Write-Warning "Skip dir rename, target exists: $($item.FullName) -> $target"
        return
    }

    Rename-Item -LiteralPath $item.FullName -NewName $newName
    $renamedDirs++
    Write-Host "Dir renamed: $($item.FullName) -> $target"
}

Write-Host ""
Write-Host "Done."
Write-Host "Files scanned: $scannedFiles"
Write-Host "Files with content changed: $changedFiles"
Write-Host "Files renamed: $renamedFiles"
Write-Host "Folders renamed: $renamedDirs"
Write-Host "Renames skipped (target exists): $skippedRenamesBecauseTargetExists"
