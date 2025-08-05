---
title:      "Frontend Package Manager"
ring:       adopt
segment:    methods-and-patterns
tags:       [ci/cd, frontend]
---

Package managers keep track of dependencies used throughout your project and their respective versions. The second of which is usually achieved with a lock-file. A file which you include in the versioning of your project to ensure any developer who installs your project to use the same versions of the necessary dependencies as you are. Apart from these features, package managers also provide a way to install, update and remove dependencies from your project. How they achieve this can affect the developer experience and the performance of your project. Finally, at least in the frontend world, package managers often offer some quality of life features such as running scripts, managing environment variables, and more. The selection of a package manager for a frontend project is often a matter of preference, but there are some key differences between the most popular ones.

### npm

[`npm`](/tools/npm/) is the original, and therefore most used, package manager in the JavaScript ecosystem.

It is a great choice when reliability and stability is a requirement. Its large community of users and contributors ensures great reference documentation and support. However, `npm` has been criticized for its performance, especially when it comes to installing dependencies. The installation process can be slow, particularly for larger projects with many dependencies. This is due to the way `npm` handles dependency resolution and installation, which can lead to redundant downloads and disk space usage.

### pnpm & yarn

[`pnpm`](/tools/pnpm/) and [`yarn`](/tools/yarn/) are two package managers that were created to address some of the shortcomings of `npm`. They both focus on performance and disk space efficiency. They achieve this by using a content-addressable storage system, which allows them to share dependencies between projects. This can significantly reduce the amount of disk space used by your project, especially if you have multiple projects that share the same dependencies.

Both `pnpm` and `yarn` also offer some additional features that can improve the developer experience, such as workspaces, which allow you to manage multiple packages within a single repository, therefore better supporting monorepos. They also provide a more user-friendly CLI, with better error messages and more intuitive commands.

Both package managers have broad support and are widely used in the frontend community. At AOE we mostly use one of these two package managers when working on frontend projects. The choice between the two is often a matter of preference, as they both offer similar features and performance benefits. However, `pnpm` does outperform `yarn` in a few benchmarks, thus making it the preferred choice for most new projects at AOE.

### bun

Apart from aiming to be a drop-in replacement for the Node.js runtime itself, [`bun`](/tools/bun/) also comes with its own package manager. It also provide faster install times and more efficient disk usage like `pnpm` and `yarn`. Bun can also replace your test runner and bundler, and also ships with TypeScript support out of the box.

Sadly, `bun` is still relatively new and some features are still under development. Therefore, it is not yet viable for enterprise level applications. However, it is worth keeping an eye on as it continues to mature.

### Conclusion

In conclusion, the choice of a frontend package manager can have a significant impact on the development process. While `npm` is a reliable and widely-used option, `pnpm` and `yarn` offer performance and efficiency benefits that can be advantageous for larger projects. `bun`, although still maturing, presents an interesting alternative with its integrated tooling.

Ultimately, the best choice depends on the specific needs and preferences of your project and team. It's essential to consider factors such as stability, performance, and the overall developer experience when making your decision.
