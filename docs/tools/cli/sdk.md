---
id: cli-sdk-init
title: SDK
pagination_label: CLI SDK
sidebar_label: SDK
sidebar_position: 20
sidebar_class_name: cli-sdk
keywords: ['cli', 'sdk init', 'sailpoint sdk', 'sdk setup']
description: Learn how to initialize a SailPoint SDK project using the CLI.
slug: /tools/cli/sdk
tags: ['CLI']
---

Learn how to use the SailPoint CLI to setup an SDK project. This command helps you initialize SDK projects across supported languages including Python, Go, PowerShell, and TypeScript.

- [Golang](#golang)
- [Python](#python)
- [PowerShell](#powershell)
- [TypeScript](#typescript)

## Golang

The SailPoint CLI offers a few commands that will allow you to quickly get started with the Go SDK. To learn how to install and use the SailPoint CLI, refer to [SailPoint CLI](https://developer.sailpoint.com/idn/tools/cli#get-the-cli).

Once the CLI is installed and configured, run this command to create a new Go project with the Go SDK:

```bash
sail sdk init golang go-example
```

Running the command will create the structure for your project:

```text
|-- go-example
|   |-- go.mod
|   |-- go.sum
|   |-- sdk.go
```

Navigate into your project folder and run this command to install the required dependencies:

```bash
go mod tidy
```

The SDK is now installed. To learn how to configure the SDK, refer to the [Configure section](#configure).

## Python

The SailPoint CLI offers a few commands that will allow you to quickly get started with the Python SDK. To learn how to install and use the SailPoint CLI, refer to [SailPoint CLI](https://developer.sailpoint.com/idn/tools/cli#get-the-cli).

Once the CLI is installed and configured, run this command to create a new Python project with the Python SDK:

```bash
sail sdk init python python-example
```

Running this command will create the structure for your project:

```text
|-- python-example
|   |-- requirements.txt
|   |-- sdk.py
```

Navigate into your project folder and run this command to install the required dependencies:

```bash
pip install -r requirements.txt
```

The SDK is now installed. To learn how to configure the SDK, refer to the [Configure section](#configure).

## PowerShell

The SailPoint CLI offers a few commands that will allow you to quickly get started with the PowerShell SDK. To learn how to install and use the SailPoint CLI, refer to [SailPoint CLI](https://developer.sailpoint.com/idn/tools/cli#get-the-cli).

Once the CLI is installed and configured, run this command to create a new PowerShell project with the PowerShell SDK:

```bash
sail sdk init powershell
```

Running the command create the structure for your project:

```text
|-- powershell-template
|   |-- paginate.ps1
|   |-- paginateAccounts.ps1
|   |-- patchEntitlement.ps1
|   |-- sdk.ps1
|   |-- search.ps1
|   |-- transform.ps1
```

Run this command to install the required dependencies:

```powershell
Install-Module -Name PSSailpoint
Install-Module -Name PSSailpoint.Beta
Install-Module -Name PSSailpoint.V3
Install-Module -Name PSSailpoint.V2024
```

The command installs the SailPoint PowerShell SDK module. You will be prompted to confirm that you want to install the module from 'PSGallery'. Enter "A" to say "Yes to All".

If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the `-Force` parameter to the end of your `Install-Module` commmand:

```powershell
Install-Module -Name PSSailpoint -Force
Install-Module -Name PSSailpoint.Beta -Force
Install-Module -Name PSSailpoint.V3 -Force
Install-Module -Name PSSailpoint.V2024 -Force
```

To validate that the module is installed, run this command, `Get-Module -ListAvailable PSSailpoint`, and verify that the module is listed. Additionally, you can run this command, `Get-Command -Module PSSailpoint`, to see the available commands included in the module.

The SDK is now installed. To learn how to configure the SDK, refer to the [Configure section](#configure).

## TypeScript

The SailPoint CLI offers a few commands that will allow you to quickly get started with the Typescript SDK. To learn how to install and use the SailPoint CLI, refer to [SailPoint CLI](https://developer.sailpoint.com/idn/tools/cli#get-the-cli).

Once the CLI is installed and configured, run this command to create a new Typescript project with the Typescript SDK:

```bash
sail sdk init typescript typescript-example
```

Running the command creates the structure for your project:

```text
|-- typescript-example
|   |-- package.json
|   |-- src
|   |   |-- index.ts
|   |-- tsconfig.json
```

Navigate into your project folder and run this command to install the required dependencies:

```bash
npm install
```

The SDK is now installed. To learn how to configure the SDK, refer to the [Configure section](#configure).

## Configure

You must provide configuration to the SDK so it can authenticate to your SailPoint tenant and make API calls. To do so, you can either use a configuration file, "config.json", or environment variables.

### Configuration File

The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: `ClientId`, `ClientSecret`, `BaseURL`.

The SailPoint CLI offers a command to generate the "config.json" file with your currently configured CLI credentials.

```bash
sail sdk init config
```

If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a "config.json" for.

To pass an additional parameter that states the environment you want to configure, run this command:

```bash
sail sdk init config --env devrel
```

#### Example "config.json"

```json
{
  "ClientId": "g0567b766b413b22c05c66e75d532f1b",
  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",
  "BaseURL": "https://[tenant].api.identitynow.com"
}
```
