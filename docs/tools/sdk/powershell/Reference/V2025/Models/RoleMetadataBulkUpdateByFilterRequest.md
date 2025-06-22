---
id: v2025-role-metadata-bulk-update-by-filter-request
title: RoleMetadataBulkUpdateByFilterRequest
pagination_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_class_name: powershellsdk
keywords:
  [
    'powershell',
    'PowerShell',
    'sdk',
    'RoleMetadataBulkUpdateByFilterRequest',
    'V2025RoleMetadataBulkUpdateByFilterRequest',
  ]
slug: /tools/sdk/powershell/v2025/models/role-metadata-bulk-update-by-filter-request
tags:
  [
    'SDK',
    'Software Development Kit',
    'RoleMetadataBulkUpdateByFilterRequest',
    'V2025RoleMetadataBulkUpdateByFilterRequest',
  ]
---

# RoleMetadataBulkUpdateByFilterRequest

## Properties

| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| **Filters** | **String** | Filtering is supported for the following fields and operators: **id** : _eq, in_ **name** : _eq, sw_ **created** : _gt, lt, ge, le_ **modified** : _gt, lt, ge, le_ **owner.id** : _eq, in_ **requestable** : _eq_ | [required] |
| **Operation** | **Enum** [ "ADD", "REMOVE", "REPLACE" ] | The operation to be performed | [required] |
| **ReplaceScope** | **Enum** [ "ALL", "ATTRIBUTE" ] | The choice of update scope. | [optional] |
| **Values** | [**[]RoleMetadataBulkUpdateByFilterRequestValuesInner**](role-metadata-bulk-update-by-filter-request-values-inner) | The metadata to be updated, including attribute key and value. | [required] |

## Examples

- Prepare the resource

```powershell
$RoleMetadataBulkUpdateByFilterRequest = Initialize-V2025RoleMetadataBulkUpdateByFilterRequest  -Filters  requestable eq false `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{attribute=iscFederalClassifications, values=[topSecret]}]
```

- Convert the resource to JSON

```powershell
$RoleMetadataBulkUpdateByFilterRequest | ConvertTo-JSON
```

[[Back to top]](#)
