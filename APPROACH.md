# Approach 

## 1) Design-to-code workflow (Figma/JSON → components)
I used the provided **Design Tokens JSON** as the source of truth for colours, radii, typography and component state values. I did not rely on the Figma file for token values, because the challenge explicitly provides JSON so candidates don’t need Figma Pro to access styles.

Workflow:
1. Inspect token JSON to identify the subset needed for Buttons / Inputs / Select / Cards / Login composition.
2. Create theme CSS variables for Brand A and Brand B (e.g. `--btn-primary-bg`, `--input-border`).
3. Build components in Preact with clean props (variant/size/status/disabled).
4. Implement states (hover/focus/disabled/error/success) using CSS (Tailwind `@apply` + CSS variables).
5. Add Storybook stories showing variants/states and confirm theme switching works.

## AI usage
I used AI to support the work in a few focused areas:
- Identify only the necessary environment/config setup needed for the components and Storybook to run smoothly
- Troubleshoot build/tooling errors during setup
- Review component structure and suggest simplifications for readability/maintainability
- Help draft and polish the documentation (README/approach notes)

All final implementation decisions, code changes, and testing were done by me.

## 2) Token management (structure + consumption)
Token source:
- `src/tokens/figma-tokens.json` (kept as-is as required)

Consumption approach:
- Tokens are mapped to **CSS variables** in theme files (e.g. `src/styles/tokens.css` / `src/styles/theme.css`).
- Components never hardcode brand colours; they reference variables like:
  - Buttons: `--btn-primary-bg`, `--btn-primary-bg-hover`, etc.
  - Inputs: `--input-border`, `--input-focus`, `--input-error`, etc.
  - Select: `--select-border`, `--select-panel-bg`, etc.

This keeps components theme-agnostic and makes the Brand A/Brand B swap a pure CSS change.

## 3) Theme switching (Brand A vs Brand B)
Theme switching is handled by scoping CSS variables per theme.
Example (one approach):
- Brand A variables scoped under `:root[data-theme="brandA"]`
- Brand B variables scoped under `:root[data-theme="brandB"]`

In Storybook, the theme is set globally (and can be toggled) by setting:
`document.documentElement.dataset.theme = "brandA" | "brandB"`

Result:
- Same components render with Brand A or Brand B styling without any prop changes.

## 4) What happens when tokens change?
If a designer updates tokens (e.g. Primary colour) in Figma/JSON:
- The JSON token export is updated.
- The mapping layer (token → CSS variables) is updated or regenerated.
- Components do not change, as long as the CSS variable names remain stable.

In a more automated setup:
- A script would generate `tokens.css` from the JSON on build/CI, so updating the JSON automatically updates the CSS variables.



## 5) Trade-offs and limitations (honest notes)
- Token pipeline is intentionally simple (manual mapping / minimal automation) due to timebox.
- Brand B doesn’t aim for pixel-perfect since there’s no visual reference; the goal is to demonstrate correct token-driven theming.
- Component APIs are kept small and practical rather than fully “enterprise” configurable.




## Time spent
Under ~3 hours total from development to deploy.
