# Contributing to Woclaw Evolution

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. Please make sure to read this document before making your contribution.

## And If You Like the Project, but Just Don't Have Time to Contribute

That's fine, too! There are lots of easy ways to support the project and show your appreciation:

- Star the project
- Tweet about it
- Refer this project in your project's README
- Mention the project at local meetups and tell your friends/colleagues

## Code of Conduct

This project and everyone participating in it is governed by the
[Woclaw Evolution Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

## I Want To Contribute

> ### Legal Notice
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more
information. Therefore, we ask you to investigate carefully, collect
information and describe the issue in detail in your report.

#### How Do I Submit a Good Bug Report?

We use GitHub issues to track bugs and errors. If you run into an issue
with the project:

- Open an [Issue](https://github.com/badhope/Woclaw/issues/new).
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible.
- Provide reproduction steps.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for
Woclaw Evolution, **including completely new features and minor improvements to
existing functionality**.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/badhope/Woclaw/issues).

- Use a **clear and descriptive title**
- Provide a **step-by-step description of the suggested enhancement**
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Your First Code Contribution

#### Setting Up the Development Environment

```bash
# Clone the repository
git clone https://github.com/badhope/Woclaw.git
cd Woclaw

# Install in development mode
pip install -e ".[dev]"

# Run tests
python test_evolution.py
```

### Pull Request Process

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Styleguides

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

feat(evolution): add new crossover genetic operator
fix(trueskill): correct bayesian update calculation
docs(readme): add architecture diagram
refactor(discovery): clean up solution generation
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

### Python Code Style

- Follow PEP 8
- Use meaningful variable names
- Write docstrings for public APIs
- Keep functions focused and concise

## Join The Project Team

If you're interested in becoming a core contributor, reach out to us!

## Attribution

This guide is based on **contributing.md**. Make your own with [the generator](https://generator.contributing.md)!
