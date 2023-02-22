---
title:      "LDAP Login"
ring:       hold
quadrant:   platforms-and-aoe-services
tags:       [devops, security]
---

For years, we used LDAP Login mechanisms to authenticate our employees.

While this worked as some kind of "single credential" model, it does not support extended Security features such as
WebAuthN, Multifactor-Authentication, etc.

These we do prefer to use integrations using OpenID Connect into SSO solutions such
as [Bare.ID](/platforms-and-aoe-services/bareid.html) or [Keycloak](/tools/keycloak.html), which provide proper
authentication and federation for multiple identity sources.
