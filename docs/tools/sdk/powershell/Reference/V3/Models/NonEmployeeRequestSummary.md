---
id: non-employee-request-summary
title: NonEmployeeRequestSummary
pagination_label: NonEmployeeRequestSummary
sidebar_label: NonEmployeeRequestSummary
sidebar_class_name: powershellsdk
keywords:
  [
    'powershell',
    'PowerShell',
    'sdk',
    'NonEmployeeRequestSummary',
    'NonEmployeeRequestSummary',
  ]
slug: /tools/sdk/powershell/v3/models/non-employee-request-summary
tags:
  [
    'SDK',
    'Software Development Kit',
    'NonEmployeeRequestSummary',
    'NonEmployeeRequestSummary',
  ]
---

# NonEmployeeRequestSummary

## Properties

| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| **Approved** | **Int32** | The number of approved non-employee requests on all sources that _requested-for_ user manages. | [optional] |
| **Rejected** | **Int32** | The number of rejected non-employee requests on all sources that _requested-for_ user manages. | [optional] |
| **Pending** | **Int32** | The number of pending non-employee requests on all sources that _requested-for_ user manages. | [optional] |
| **NonEmployeeCount** | **Int32** | The number of non-employee records on all sources that _requested-for_ user manages. | [optional] |

## Examples

- Prepare the resource

```powershell
$NonEmployeeRequestSummary = Initialize-NonEmployeeRequestSummary  -Approved 2 `
 -Rejected 2 `
 -Pending 2 `
 -NonEmployeeCount 2
```

- Convert the resource to JSON

```powershell
$NonEmployeeRequestSummary | ConvertTo-JSON
```

[[Back to top]](#)
