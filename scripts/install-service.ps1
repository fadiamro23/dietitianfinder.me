$serviceName = "DietitianCountUpdater"
$scriptPath = Join-Path $PSScriptRoot "..\node_modules\.bin\ts-node"
$scriptArguments = "--project tsconfig.node.json src/scripts/autoUpdateCounts.ts"

$action = New-ScheduledTaskAction -Execute $scriptPath -Argument $scriptArguments
$trigger = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

Register-ScheduledTask -TaskName $serviceName -Action $action -Trigger $trigger -Settings $settings -Description "Automatically updates dietitian counts" 