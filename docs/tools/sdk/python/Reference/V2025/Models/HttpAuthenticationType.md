---
id: v2025-http-authentication-type
title: HttpAuthenticationType
pagination_label: HttpAuthenticationType
sidebar_label: HttpAuthenticationType
sidebar_class_name: pythonsdk
keywords:
  [
    'python',
    'Python',
    'sdk',
    'HttpAuthenticationType',
    'V2025HttpAuthenticationType',
  ]
slug: /tools/sdk/python/v2025/models/http-authentication-type
tags:
  [
    'SDK',
    'Software Development Kit',
    'HttpAuthenticationType',
    'V2025HttpAuthenticationType',
  ]
---

# HttpAuthenticationType

Defines the HTTP Authentication type. Additional values may be added in the future. If _NO_AUTH_ is selected, no extra information will be in HttpConfig. If _BASIC_AUTH_ is selected, HttpConfig will include BasicAuthConfig with Username and Password as strings. If _BEARER_TOKEN_ is selected, HttpConfig will include BearerTokenAuthConfig with Token as string.

## Enum

- `NO_AUTH` (value: `'NO_AUTH'`)

- `BASIC_AUTH` (value: `'BASIC_AUTH'`)

- `BEARER_TOKEN` (value: `'BEARER_TOKEN'`)

[[Back to top]](#)
