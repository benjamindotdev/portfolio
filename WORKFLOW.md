# Development Workflow

## Branch Strategy

This project follows a three-tier branching model:

```
main (production)
  ↑
dev (integration)
  ↑
feature/* (development)
```

### Branch Purposes

- **`main`**: Production-ready code. Only merge from `dev` after manual approval.
- **`dev`**: Integration branch for testing features together before production.
- **`feature/*`**: Individual feature branches for new development.

## Workflow Steps

### 1. Starting New Work

Always create a feature branch from `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features (e.g., `feature/dark-mode`)
- `fix/` - Bug fixes (e.g., `fix/navigation-bug`)
- `refactor/` - Code refactoring (e.g., `refactor/component-structure`)
- `perf/` - Performance improvements (e.g., `perf/image-optimization`)
- `docs/` - Documentation updates (e.g., `docs/api-guide`)

### 2. Development Cycle

While working on your feature:

```bash
# Make changes
# Stage changes
git add -A

# Commit with descriptive message
git commit -m "feat: add dark mode toggle"

# Push to remote
git push -u origin feature/your-feature-name
```

### 3. Pre-Merge Checklist

Before merging to `dev`, ensure:

#### ✅ All Tests Pass

```bash
npm test
```

All 129 tests must pass with no failures.

#### ✅ Local Build Succeeds

```bash
npm run build
```

Build must complete without errors. Check:
- No TypeScript errors
- No build warnings
- Output files generated in `build/` directory

#### ✅ Code Quality

- Code follows existing patterns
- No console errors or warnings
- Formatting is consistent
- Comments added where necessary

### 4. Merging to Dev

Once all checks pass:

```bash
# Switch to dev branch
git checkout dev

# Pull latest changes
git pull origin dev

# Merge your feature branch
git merge feature/your-feature-name

# Push to remote
git push origin dev
```

**Alternative: Delete feature branch after merge**

```bash
# After successful merge to dev
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

### 5. Merging to Main (Manual Approval Only)

⚠️ **Never merge to `main` automatically**

Only merge `dev` to `main` when explicitly approved:

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge dev branch
git merge dev

# Push to remote
git push origin main
```

After merging to main:
- Netlify automatically deploys to production
- Tag the release if significant:
  ```bash
  git tag -a v1.0.0 -m "Release version 1.0.0"
  git push origin v1.0.0
  ```

## Quick Reference Commands

### Check Current Branch
```bash
git branch
```

### Switch Branches
```bash
git checkout branch-name
```

### View Branch Status
```bash
git status
```

### View Recent Commits
```bash
git log --oneline -5
```

### Undo Local Changes
```bash
# Undo unstaged changes
git restore .

# Undo staged changes
git restore --staged .
```

### Update Local Branch with Remote
```bash
git pull origin branch-name
```

## Example Workflow

**Scenario: Adding a new contact form feature**

```bash
# 1. Start from dev
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/contact-form

# 3. Make changes and commit
# ... edit files ...
git add -A
git commit -m "feat: add contact form component"

# 4. Run tests
npm test
# ✅ All tests pass

# 5. Build locally
npm run build
# ✅ Build succeeds

# 6. Push feature branch
git push -u origin feature/contact-form

# 7. Merge to dev
git checkout dev
git merge feature/contact-form
git push origin dev

# 8. Wait for approval before merging to main
# (User will manually approve when ready)
```

## Troubleshooting

### Merge Conflicts

If you encounter conflicts during merge:

```bash
# View conflicted files
git status

# Open conflicted files and resolve manually
# Look for conflict markers: <<<<<<<, =======, >>>>>>>

# After resolving conflicts
git add -A
git commit -m "resolve: merge conflicts"
```

### Accidentally Committed to Wrong Branch

```bash
# If you committed to main/dev instead of feature branch
git reset --soft HEAD~1  # Undo last commit, keep changes
git stash                # Save changes temporarily
git checkout -b feature/new-branch  # Create correct branch
git stash pop            # Restore changes
git add -A
git commit -m "feat: your message"
```

### Reset Dev to Match Remote

```bash
git checkout dev
git fetch origin
git reset --hard origin/dev
```

## CI/CD Integration (Future)

Consider adding GitHub Actions for automated checks:
- Run tests on push to feature branches
- Auto-build on push to dev
- Require approvals for main branch merges
- Run Lighthouse performance audits
- Check bundle size increases

## Notes

- **Test Coverage**: Maintain current 100% test coverage for new features
- **Performance**: Monitor bundle size after adding new dependencies
- **Security**: Run `npm audit` regularly to check for vulnerabilities
- **Documentation**: Update README.md when adding major features
