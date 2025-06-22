---
id: model-schema
title: ModelSchema
pagination_label: ModelSchema
sidebar_label: ModelSchema
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ModelSchema', 'ModelSchema']
slug: /tools/sdk/python/v3/models/model-schema
tags: ['SDK', 'Software Development Kit', 'ModelSchema', 'ModelSchema']
---

# ModelSchema

## Properties

| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| **id** | **str** | The id of the Schema. | [optional] |
| **name** | **str** | The name of the Schema. | [optional] |
| **native_object_type** | **str** | The name of the object type on the native system that the schema represents. | [optional] |
| **identity_attribute** | **str** | The name of the attribute used to calculate the unique identifier for an object in the schema. | [optional] |
| **display_attribute** | **str** | The name of the attribute used to calculate the display value for an object in the schema. | [optional] |
| **hierarchy_attribute** | **str** | The name of the attribute whose values represent other objects in a hierarchy. Only relevant to group schemas. | [optional] |
| **include_permissions** | **bool** | Flag indicating whether or not the include permissions with the object data when aggregating the schema. | [optional] |
| **features** | **[]str** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. _ AUTHENTICATE: The source supports pass-through authentication. _ COMPOSITE: The source supports composite source creation. _ DIRECT_PERMISSIONS: The source supports returning DirectPermissions. _ DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. _ ENABLE The source supports reading if an account is enabled or disabled. _ MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. _ NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. _ PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. _ SEARCH _ TEMPLATE _ UNLOCK: The source supports reading if an account is locked or unlocked. _ UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. _ SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. _ PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. _ GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. _ SYNC_PROVISIONING: The source can provision accounts synchronously. _ PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. _ CURRENT_PASSWORD: Some source types support verification of the current password _ ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. _ ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. _ NO_AGGREGATION: A source that does not support aggregation. _ GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. _ NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. _ NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. _ NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. _ NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. _ USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. _ PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. _ ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM _ ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM \* ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] |
| **configuration** | **object** | Holds any extra configuration data that the schema may require. | [optional] |
| **attributes** | [**[]AttributeDefinition**](attribute-definition) | The attribute definitions which form the schema. | [optional] |
| **created** | **datetime** | The date the Schema was created. | [optional] |
| **modified** | **datetime** | The date the Schema was last modified. | [optional] |

}

## Example

```python
from sailpoint.v3.models.model_schema import ModelSchema

model_schema = ModelSchema(
id='2c9180835d191a86015d28455b4a2329',
name='account',
native_object_type='User',
identity_attribute='sAMAccountName',
display_attribute='distinguishedName',
hierarchy_attribute='memberOf',
include_permissions=False,
features=[PROVISIONING, NO_PERMISSIONS_PROVISIONING, GROUPS_HAVE_MEMBERS],
configuration={groupMemberAttribute=member},
attributes=[{name=sAMAccountName, type=STRING, isMultiValued=false, isEntitlement=false, isGroup=false}, {name=memberOf, type=STRING, schema={type=CONNECTOR_SCHEMA, id=2c9180887671ff8c01767b4671fc7d60, name=group}, description=Group membership, isMultiValued=true, isEntitlement=true, isGroup=true}],
created='2019-12-24T22:32:58.104Z',
modified='2019-12-31T20:22:28.104Z'
)

```

[[Back to top]](#)
