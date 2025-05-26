---
title:      "Payload CMS"
ring:       assess
quadrant:   tools
tags:       [cms, headless]
---

Payload CMS has recently released version 3, bringing significant improvements in performance, flexibility, and developer experience. As a self-hosted, headless CMS built with Node.js and TypeScript, Payload offers full control over data models, access control, and API behavior—making it a strong candidate for custom content-heavy applications.

Payload CMS structures its data through the concept of **Collections**, which are essentially models representing content types such as blog posts, products, users, or pages. Each Collection defines its fields, access controls, validation rules, and admin UI behavior using a TypeScript configuration object. This provides a high degree of flexibility while ensuring type safety and consistency across the backend.

In version 3, Collections benefit from several enhancements:

- **Field-level Customization**: You can define complex nested structures using fields like `group`, `array`, and `blocks`, enabling advanced layouts such as modular content sections or reusable components.
- **Access Control**: Fine-grained access control can be applied at both the collection and individual field level using functions that evaluate the user context.
- **Hooks System**: Collections support lifecycle hooks (e.g., `beforeChange`, `afterRead`) that allow custom logic to run during operations like create, update, or delete.
- **Localization**: Multilingual content is easily supported by enabling localization on individual fields or entire collections.
- **Admin Panel Integration**: Collections automatically generate intuitive admin interfaces, with customizable labels, field positions, and even custom React components for bespoke editor experiences.

These features make Payload's Collections highly extensible and suitable for both traditional content management and more dynamic, application-like data structures. The declarative schema setup aligns well with modern development practices and fits neatly into Git-based workflows.

### Database

Payload is database agnostic, meaning you can use any type of database behind Payload's familiar APIs. Payload is designed to interact with your database through a Database Adapter, which is a thin layer that translates Payload's internal data structures into your database's native data structures.

Currently, Payload officially supports the following Database Adapters:

- MongoDB with Mongoose
- Postgres with Drizzle
- SQLite with Drizzle

### Storage

To handle file upload you can connect payload for example to your AWS S3 via its payload adapter plugin.

[Documentation](https://payloadcms.com/docs/getting-started/what-is-payload)
