---
id: beta-schedule-days
title: ScheduleDays
pagination_label: ScheduleDays
sidebar_label: ScheduleDays
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduleDays', 'BetaScheduleDays']
slug: /tools/sdk/python/beta/models/schedule-days
tags: ['SDK', 'Software Development Kit', 'ScheduleDays', 'BetaScheduleDays']
---

# ScheduleDays

Specifies which day(s) a schedule is active for. This is required for all schedule types. The \"values\" field holds different data depending on the type of schedule: _ WEEKLY: days of the week (1-7) _ MONTHLY: days of the month (1-31, L, L-1...) _ ANNUALLY: if the \"months\" field is also set: days of the month (1-31, L, L-1...); otherwise: ISO-8601 dates without year (\"--12-31\") _ CALENDAR: ISO-8601 dates (\"2020-12-31\") Note that CALENDAR only supports the LIST type, and ANNUALLY does not support the RANGE type when provided with ISO-8601 dates without year. Examples: On Sundays: _ type LIST _ values \"1\" The second to last day of the month: _ type LIST _ values \"L-1\" From the 20th to the last day of the month: _ type RANGE _ values \"20\", \"L\" Every March 2nd: _ type LIST _ values \"--03-02\" On March 2nd, 2021: _ type: LIST _ values \"2021-03-02\"

## Properties

| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| **type** | **Enum** [ 'LIST', 'RANGE' ] | Enum type to specify days value | [required] |
| **values** | **[]str** | Values of the days based on the enum type mentioned above | [required] |
| **interval** | **int** | Interval between the cert generations | [optional] |

}

## Example

```python
from sailpoint.beta.models.schedule_days import ScheduleDays

schedule_days = ScheduleDays(
type='LIST',
values=[1],
interval=2
)

```

[[Back to top]](#)
